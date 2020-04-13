from flask import Flask, g, request, Response, make_response, url_for, redirect
from flask import session, render_template, Markup
import numpy as np
from matplotlib import font_manager, rc
import chardet
import pandas as pd
import mglearn
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
from sklearn.neighbors import KNeighborsClassifier
from haversine import haversine
from bs4 import BeautifulSoup
import requests
from module import dbModule
import datetime
from itertools import permutations


app = Flask(__name__)
app.debug = True
app.secret_key = 'app secret key'


if __name__ == '__main__':
    app.run()


@app.route('/')
def login():
    return render_template('login.html')

@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        user = request.form['materialLoginFormPhone']
        if user != None:
            session['logged_in'] = user
            db_class= dbModule.Database()
            sql = "INSERT IGNORE INTO Airport.customer VALUES(%s);"
            db_class.execute(sql,(user))
            db_class.commit()

            sql = "INSERT IGNORE INTO Airport.Departure(f_id) VALUES(%s)"
            db_class.execute(sql,(user))
            db_class.commit()

    
    return redirect(url_for('home'))


@app.route('/home')
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        db_class= dbModule.Database()
        p_id = session.get('logged_in')

        sql = "SELECT * FROM Airport.Departure WHERE f_id=%s"
        row = db_class.executeAll(sql,(p_id))
        db_class.commit()


        return render_template('index.html', resultData=row[0])


@app.route('/modal_submit', methods=['POST'])
def modal_submit():
    if request.method == 'POST':
        flight_id = request.form['flight_search_input']

        url = 'http://openapi.airport.kr/openapi/service/StatusOfPassengerFlights/getPassengerDepartures?ServiceKey=66063YTIfEiCLfP6GQaefJOoCIAGlG79bHmFOdBZ%2BrGEZ%2B6syoDTCimut6%2F%2FIXO2WF%2FP5m6KrYPnF16DvsPgfQ%3D%3D&from_time=0000&to_time=2400&airport=&'
        url += 'flight_id='
        url += flight_id

        req = requests.get(url)
        html = req.text
        soup = BeautifulSoup(html, 'html.parser')

        airline = '' 
        flightid = ''
        scheduledatetime = ''
        airport = ''
        chkinrange = ''
        gatenumber = ''
        remark = ''
        terminalid = ''

        if soup.find('airline') != None:
            airline = soup.find('airline').text
        if soup.find('flightid') != None:
            flightid = soup.find('flightid').text
        if soup.find('scheduledatetime') != None:
            scheduledatetime = soup.find('scheduledatetime').text
        if soup.find('airport') != None:
            airport = soup.find('airport').text
        if soup.find('chkinrange') != None:
            chkinrange = soup.find('chkinrange').text
        if soup.find('gatenumber') != None:
            gatenumber = soup.find('gatenumber').text
        if soup.find('remark') != None:
            remark = soup.find('remark').text
        if soup.find('terminalid') != None:
            terminalid = soup.find('terminalid').text

        else:
            flight_id = None
            airplane = None

        db_class= dbModule.Database()
        p_id = session.get('logged_in')

        sql     = "UPDATE Airport.Departure \
                    SET flightid=%s, airline=%s, scheduledatetime=%s, airport=%s, chkinrange=%s, gatenumber=%s, remark=%s, terminalid=%s \
                    WHERE f_id=%s"
        db_class.execute(sql,(flightid, airline, scheduledatetime, airport, chkinrange, gatenumber, remark, terminalid, p_id))   
        db_class.commit()

        sql = "SELECT * FROM Airport.Departure WHERE f_id=%s"
        row = db_class.executeAll(sql,(p_id))
        db_class.commit()



    return render_template('index.html', resultData = row[0])






@app.route('/mypage')
@app.route('/mypage/')
def mypage():
    db_class= dbModule.Database()
    p_id = session.get('logged_in')

    return render_template('mypage.html', p_id = p_id)

@app.route('/mypage/update', methods=['POST'])
@app.route('/mypage/update/', methods=['POST'])
def mypage_update():
    if request.method == 'POST':
        p_id = session.get('logged_in')
        id_up = request.form['id_update']

        sql     = "UPDATE Airport.Departure \
                    SET f_id=%s \
                    WHERE f_id=%s"
        db_class.execute(sql,(id_up, p_id))   
        db_class.commit()

        sql     = "UPDATE Airport.customer \
                    SET p_id=%s \
                    WHERE p_id=%s"
        db_class.execute(sql,(id_up, p_id))   
        db_class.commit()

        sql     = "UPDATE Airport.route \
                    SET r_id=%s \
                    WHERE r_id=%s"
        db_class.execute(sql,(id_up, p_id))   
        db_class.commit()


        session['logged_in'] = id_up


    return render_template('mypage.html', p_id = id_up)



@app.route('/mypage/flight')
@app.route('/mypage/flight/')
def mypage_flight():
    db_class= dbModule.Database()
    p_id = session.get('logged_in')

    sql = "SELECT * FROM Airport.Departure WHERE f_id=%s"
    row = db_class.executeAll(sql,(p_id))
    db_class.commit()

    return render_template('reg_flight.html', resultData = row[0])

@app.route('/mypage/route')
@app.route('/mypage/route/')
def mypage_route():
    db_class= dbModule.Database()
    p_id = session.get('logged_in')

    sql = "SELECT * FROM Airport.route WHERE r_id=%s"
    row = db_class.executeAll(sql,(p_id))
    db_class.commit()
    row_len = len(row)

    return render_template('reg_route.html', resultData = row, row_len = row_len)



@app.route('/mypage/logout')
@app.route('/mypage/logout/')
def mypage_logout():

    return render_template('logout.html')

@app.route('/logout')
@app.route('/logout/')
def logout():
    db_class= dbModule.Database()
    p_id = session.get('logged_in')    

    sql = "DELETE FROM Airport.Departure WHERE f_id=%s"
    row = db_class.executeAll(sql,(p_id))
    db_class.commit()

    sql = "DELETE FROM Airport.customer WHERE p_id=%s"
    row = db_class.executeAll(sql,(p_id))
    db_class.commit()

    session.pop('logged_in', None)

    return render_template('login.html')



@app.route('/facilities')
@app.route('/facilities/')
def facilities():
    return render_template('facilities.html')


@app.route('/facilities/snack')
@app.route('/facilities/snack/')
def facilities_snack():
    return render_template('facilities_snack.html')





@app.route('/com.hello')
def map():
    return render_template('com.hello.html')


@app.route('/map1',methods=['POST'])
def map_sub2():
    if request.method == 'POST':
        global route_start
        global route_end
        global way_length
        global num_middle
        global send

        route_start = request.form['start']
        if route_start == "현재위치":
            start_latitude = request.form['start_latitude']
            start_longitude = request.form['start_longitude']
        else:
            start_latitude = "0.0"
            start_longitude = "0.0"


        route_end = request.form['end']     
        middle_count = request.form['add123']

        middle = request.form.getlist('middle')
      


        font_name = font_manager.FontProperties(\
        fname = "c:/Windows/Fonts/malgun.ttf").get_name()
        rc('font', family = font_name)

        with open('food_store1.csv', 'rb') as f:
             result = chardet.detect(f.read())
                
        data = pd.read_csv("facility.csv", sep = ",", encoding='ms949')

        df1 = data[['한식', '중식', '일식', '양식', '아시안', '패스트푸드','스낵/카페/디저트', '금융', '면세점(명품브랜드)', '면세점(향수/화장품)', '면세점(주류/담배)', '휴대폰로밍']]

        pca = PCA(n_components = 2)
        x_2D = pca.fit_transform(df1)
        model = KMeans(n_clusters = 11)
        model.fit(x_2D)
        model.labels_
        data['Label'] = list(model.labels_)
        data.to_csv("facility.csv", index = False, encoding='ms949')
        data = pd.read_csv("facility.csv", sep = ",", encoding='ms949')
        y = data[['Label']]

        knn = KNeighborsClassifier(n_neighbors = 1)
        knn.fit(x_2D, y)

        while(1) :
            num_middle = int(middle_count)
            predList = []
            na = middle

            for i in range (0, num_middle) :
                v = data[data.매장명 == na[i]]
                predList.append(knn.predict([x_2D[v.index.values.tolist()[0]]])[0])


            if len(set(predList)) == len(predList) :
                for index, value in enumerate(predList) :
                    print("예측결과%d : %d" % (index+1, value)) 
                break
            elif len(set(predList)) != len(predList) :
                ans = input('고르신 매장중에 비슷한 유형의 매장들이 있어요. 같은 분류로 합쳐서 추천해드릴까요? (yes/no) : ')
                if ans == 'yes' :
                    predList = list(set(predList))
                    for index, value in enumerate(predList) :
                        print("예측결과%d : %d" % (index+1, value)) 
                        num_middle = index
                    break
                elif ans == 'no' :
                    print('돌아가서 매장을 다시 선택해주세요.');



        read_gate = pd.read_csv("gate.csv", sep = ",", encoding='ms949')
        name_gate = route_end
        gateLat = read_gate[read_gate.게이트명 == name_gate].위도.values[0]
        gateLon = read_gate[read_gate.게이트명 == name_gate].경도.values[0]
        gate = [gateLat, gateLon]

        distance_gate = []
        distance_depart = []
        sector = []


        user_loc = route_start

        if user_loc == '현재위치' :
            user_loc = [float(start_latitude), float(start_longitude)]
        elif user_loc in data['매장명'].values.tolist() :
            user_loc = [ data[data['매장명'] == user_loc]['위도'].values[0], data[data['매장명'] == user_loc]['경도'].values[0]]



        lat = list(data['위도'])
        lon = list(data['경도'])

        for i in range(0, len(lat)) :
            distance_gate.append(haversine(gate, [lat[i], lon[i]])*1000)
            distance_depart.append(haversine(user_loc, [lat[i], lon[i]])*1000)

        data['게이트거리(m)'] = distance_gate
        data.to_csv("facility.csv", index = False, encoding='ms949')
        depart = data[['거리(m)', 'Sector', '매장명']]
        depart['거리(m)'] = distance_depart
        sector.append(depart.sort_values(by='거리(m)').head(1).Sector.values[0])
        sector.append(read_gate[read_gate.게이트명 == name_gate].Sector.values[0])

        if abs(sector[0] - sector[1]) == 1 or sector[0] == 4:
            if sector[0] == 1 :
                sector.append(4)
            elif sector[0] == sector[1] :
                del(sector[1])
                
        elif sector[0] == sector[1] :
            del(sector[1])
            sector.append(4)
            
        else :
            if sector[1] != 4 :
                sector.append(4)
                
        if len(sector) >= 3 :
            x = sector[2]
            sector[2] = sector[1]
            sector[1] = x


        df2 = []
        distance_user = []
        for index, value in enumerate(predList)  :
            df2.append(data[data.Label == int(value)])
        df2 = pd.concat(df2)
        selStore = pd.DataFrame({"Label" : list(df2['Label']),
                                 "Sector" : list(df2['Sector']),
                                 "거리(m)" : list(df2['거리(m)']),
                                 "게이트거리(m)" : list(df2['게이트거리(m)']),
                                 "총거리(m)" : list(df2['총거리(m)']),
                                 "위도" : list(df2['위도']),
                                 "경도" : list(df2['경도']),
                                 "매장명" : list(df2['매장명'])})
        #################################경유지와 유사한 아이템들을 한개의 dataframe에 모두 병합#################
        if sector[0] != 1 and len(selStore[selStore['Sector'] == 1]) > 2 :
             ##구역1에 있는 상점중에 각기 다른 Label의 빈도수
            item = selStore[selStore['Sector'] == 1]['Label'].value_counts().sort_values(ascending=False).index[0]
            for i in range(0, len(predList)) :
                if item == predList[i] : 
                    print('%s와 비슷한 매장들은 고객님이 출국심사장을 지나오셨기 때문에 갈 수 없습니다. 매장을 다시 선택해주십시오.' %(na[i]))

        else :
            lat = list(selStore['위도'])
            lon = list(selStore['경도'])
            way_point = []
            way = []
            for i in range(0, num_middle) :
                result= []
                if not way_point :
                    for i in range(0, len(selStore)) :
                        distance_user.append(haversine(user_loc, [lat[i], lon[i]])*1000)
                    selStore['거리(m)'] = distance_user
                
                    if sector[0] == 1 :
                        way_point.append(selStore[selStore['Sector'] == 1])
                    else :
                        selStore.loc[selStore['Sector'] == 1, '거리(m)'] = float('inf')
                        way_point.append(selStore[selStore['거리(m)'] <= 150])
                    
                    exception = list(way_point[0]['Label'])

                else :
                    ft = []
                    scr1 = []
                    prev_lat = list(way_point[i-1]['위도'])
                    prev_lon = list(way_point[i-1]['경도'])
                
                    for j in range(0,len(way_point[i-1])) :
                        distance_item = []
                        except_df = selStore
                        if i <= 1 :
                            except_df = except_df[except_df['Label'] != exception[j]]
                        elif i > 1 :
                            for p in range(0, len(scr2.values[j])) :
                                except_df = except_df[except_df['Label'] != list(scr2.values[j])[p]]
                            
                
                        lat = list(except_df['위도'])
                        lon = list(except_df['경도'])
                        
                        for k in range(0, len(except_df)) :
                            distance_item.append(haversine( [ prev_lat[j],prev_lon[j] ] , [ lat[k],lon[k] ] )*1000)
                        except_df['거리(m)'] = distance_item
                    
                        if way_point[i-1][j:j+1]['Sector'].values[0] != 1 : 
                            except_df.loc[except_df['Sector'] == 1, '거리(m)'] = float('inf')
                
                        ft.append(except_df[except_df['거리(m)'] <= 300])
                    
                    
                        if i <= 1 :
                            for m in range(0, len(ft[j])) :
                                scr1.append([exception[j], list(ft[j]['Label'])[m]])
                                way.append(pd.concat([way_point[i-1][j:j+1], ft[j][m:m+1]]))
                        elif i > 1 :
                            for m in range(0, len(ft[j])) :
                                pong = []
                                for n in range(0, len(scr2.values[j])) :
                                    pong.append(list(scr2.values[j])[n])
                                pong.append(ft[j]['Label'].values[m])
                                scr1.append(pong)
                                result.append(pd.concat([way[j], ft[j][m:m+1]]))
                
                    if i > 1 :
                        way = result
                    
                    way_point.append(pd.concat(ft))
                    scr2 = pd.DataFrame(scr1)
            
        send =[]
        result = []
        
        for i in range(0, len(way)) :
            send.append(way[i]['매장명'].values.tolist())
            result.append(way[i]['매장명'].values.tolist())


        for i in range(0, len(send)) :
            a = []
            for j in permutations(send[i]) :
                a.append(list(j))
            for k in range(1, len(a)) :
                if result.count(a[k]) == 1 :
                    result.remove(a[k])

        send = result
        way_length = len(send)

    return render_template('map1.html', route_start = route_start, route_end = route_end, way_length = way_length, num_middle = num_middle, send = send)



@app.route('/save_route', methods=['POST'])
@app.route('/save_route/', methods=['POST'])
def save_route():
    if request.method == 'POST':
        r_id = session.get('logged_in')
        route = request.form['route']

        db_class= dbModule.Database()
        sql = "INSERT INTO Airport.route(r_id,route) VALUES(%s, %s)"
        db_class.execute(sql,(r_id, route))
        db_class.commit()

        global route_start
        global route_end
        global way_length
        global num_middle
        global send

    return render_template('map1.html', route_start = route_start, route_end = route_end, way_length = way_length, num_middle = num_middle, send = send)

@app.route('/del_route', methods=['POST'])
@app.route('/del_route/', methods=['POST'])
def del_route():
    if request.method == 'POST':
        r_id = session.get('logged_in')
        route = request.form['route']

        db_class= dbModule.Database()
        sql = "DELETE FROM Airport.route WHERE r_id=%s and route=%s"
        db_class.execute(sql,(r_id, route))
        db_class.commit()

        sql = "SELECT * FROM Airport.route WHERE r_id=%s"
        row = db_class.executeAll(sql,(r_id))
        db_class.commit()
        row_len = len(row)

    return render_template('reg_route.html', resultData = row, row_len = row_len)






@app.route('/departure_sel',methods=['POST'])
def departure_sel(flight_id=''):
    if request.method == 'POST':
        temp = request.form['flight_id']
    else:
        temp = None
    return redirect(url_for('departure',flight_id=temp))

@app.route("/departure")
@app.route("/departure/")
@app.route("/departure/<string:flight_id>")
def departure(flight_id=''):
    dt = datetime.datetime.now()
    nowhour = dt.hour
    tohour = dt.hour + 2
    nowminute = dt.minute

    if nowhour <= 7:
        nowhour = str(0) + str(nowhour)
        tohour = str(0) + str(tohour)
    elif nowhour == 8 and nowhour == 9:
        nowhour = str(0) + str(nowhour)
        tohour = tohour
    elif (nowhour > 9 and nowhour <= 22):
        nowhour = nowhour
        tohour = tohour
    elif nowhour == 23:
        nowhour = nowhour
        tohour = str(0) + str(1)
    else:
        nowhour = nowhour
        tohour = str(0) + str(2)
    

    if nowminute <= 9:
        nowminute = str(0) + str(nowminute)

    nowtime = str(nowhour) + str(nowminute)
    totime = str(tohour) + str(nowminute)


    url = 'http://openapi.airport.kr/openapi/service/StatusOfPassengerFlights/getPassengerDepartures?ServiceKey=66063YTIfEiCLfP6GQaefJOoCIAGlG79bHmFOdBZ%2BrGEZ%2B6syoDTCimut6%2F%2FIXO2WF%2FP5m6KrYPnF16DvsPgfQ%3D%3D'
    url += '&from_time='
    url += nowtime
    url += '&to_time='
    url += totime
    url += '&airport=&flight_id='
    url += flight_id
    print(url)

    req = requests.get(url)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')


    flightid = ''
    scheduledatetime = ''
    airport = ''
    chkinrange = ''
    gatenumber = ''
    remark = ''
    terminalid = ''

    flightidlist = []
    scheduledatetimelist = []
    airportlist = []
    chkinrangelist = []
    gatenumberlist = []
    remarklist = []
    terminalidlist = []
    

    flightid = soup.find_all('flightid')
    scheduledatetime = soup.find_all('scheduledatetime')
    airport = soup.find_all('airport')
    chkinrange = soup.find_all('chkinrange')
    gatenumber = soup.find_all('gatenumber')
    remark = soup.find_all('remark')
    terminalid = soup.find_all('terminalid')


    for code in flightid:
        flightidlist.append(code.text)    
    for code in scheduledatetime:
        scheduledatetimelist.append(code.text)
    for code in airport:
        airportlist.append(code.text)
    for code in chkinrange:
        chkinrangelist.append(code.text)
    for code in gatenumber:
        gatenumberlist.append(code.text)    
    for code in remark:
        remarklist.append(code.text)
    for code in terminalid:
        terminalidlist.append(code.text)    

    scheduledatetimelist = scheduledatetimelist[:30]
    flightidlist = flightidlist[:30]
    airportlist = airportlist[:30]
    chkinrangelist = chkinrangelist[:30]
    gatenumberlist = gatenumberlist[:30]
    remarklist = remarklist[:30]
    terminalidlist = terminalidlist[:30]


    airplane = [flightidlist, scheduledatetimelist, airportlist, chkinrangelist, gatenumberlist, remarklist, terminalidlist]

    return render_template('departure.html', airplane = airplane, flight_id = flight_id)

@app.route('/dep_modal_submit', methods=['POST'])
def dep_modal_submit():
    if request.method == 'POST':
        flight_id = request.form['bookId']
    
        url = 'http://openapi.airport.kr/openapi/service/StatusOfPassengerFlights/getPassengerDepartures?ServiceKey=66063YTIfEiCLfP6GQaefJOoCIAGlG79bHmFOdBZ%2BrGEZ%2B6syoDTCimut6%2F%2FIXO2WF%2FP5m6KrYPnF16DvsPgfQ%3D%3D&from_time=0000&to_time=2400&airport=&'
        url += 'flight_id='
        url += flight_id
        
        req = requests.get(url)
        html = req.text
        soup = BeautifulSoup(html, 'html.parser')

        airline = '' 
        flightid = ''
        scheduledatetime = ''
        airport = ''
        chkinrange = ''
        gatenumber = ''
        remark = ''
        terminalid = ''

        if soup.find('airline') != None:
            airline = soup.find('airline').text
        if soup.find('flightid') != None:
            flightid = soup.find('flightid').text
        if soup.find('scheduledatetime') != None:
            scheduledatetime = soup.find('scheduledatetime').text
        if soup.find('airport') != None:
            airport = soup.find('airport').text
        if soup.find('chkinrange') != None:
            chkinrange = soup.find('chkinrange').text
        if soup.find('gatenumber') != None:
            gatenumber = soup.find('gatenumber').text
        if soup.find('remark') != None:
            remark = soup.find('remark').text
        if soup.find('terminalid') != None:
            terminalid = soup.find('terminalid').text

        else:
            flight_id = None
            airplane = None

        db_class= dbModule.Database()
        p_id = session.get('logged_in')


        sql     = "UPDATE Airport.Departure \
                    SET flightid=%s, airline=%s, scheduledatetime=%s, airport=%s, chkinrange=%s, gatenumber=%s, remark=%s, terminalid=%s \
                    WHERE f_id=%s"
        db_class.execute(sql,(flightid, airline, scheduledatetime, airport, chkinrange, gatenumber, remark, terminalid, p_id))   
        db_class.commit()

        sql = "SELECT * FROM Airport.Departure WHERE f_id=%s"
        row = db_class.executeAll(sql,(p_id))
        db_class.commit()


    return render_template('index.html', resultData = row[0])





@app.route('/arrival_sel',methods=['POST'])
def arrival_sel(flight_id=''):
    if request.method == 'POST':
        temp = request.form['flight_id']
    else:
        temp = None
    return redirect(url_for('arrival',flight_id=temp))

@app.route("/arrival")
@app.route("/arrival/")
@app.route("/arrival/<string:flight_id>")
def arrival(flight_id=''):

    dt = datetime.datetime.now()
    nowhour = dt.hour
    tohour = dt.hour + 2
    nowminute = dt.minute

    if nowhour <= 7:
        nowhour = str(0) + str(nowhour)
        tohour = str(0) + str(tohour)
    elif nowhour == 8 and nowhour == 9:
        nowhour = str(0) + str(nowhour)
        tohour = tohour
    elif (nowhour > 9 and nowhour <= 22):
        nowhour = nowhour
        tohour = tohour
    elif nowhour == 23:
        nowhour = nowhour
        tohour = str(0) + str(1)
    else:
        nowhour = nowhour
        tohour = str(0) + str(2)
    

    if nowminute <= 9:
        nowminute = str(0) + str(nowminute)


    nowtime = str(nowhour) + str(nowminute)
    totime = str(tohour) + str(nowminute)


    url = 'http://openapi.airport.kr/openapi/service/StatusOfPassengerFlights/getPassengerArrivals?ServiceKey=66063YTIfEiCLfP6GQaefJOoCIAGlG79bHmFOdBZ%2BrGEZ%2B6syoDTCimut6%2F%2FIXO2WF%2FP5m6KrYPnF16DvsPgfQ%3D%3D'
    url += '&from_time='
    url += nowtime
    url += '&to_time='
    url += totime
    url += '&airport=&flight_id='
    url += flight_id
    print(url)

   
    
    req = requests.get(url)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')

    flightid = ''
    scheduledatetime = ''
    airport = ''
    chkinrange = ''
    gatenumber = ''
    remark = ''
    terminalid = ''

    flightidlist = []
    scheduledatetimelist = []
    airportlist = []
    chkinrangelist = []
    gatenumberlist = []
    remarklist = []
    terminalidlist = []
    

    flightid = soup.find_all('flightid')
    scheduledatetime = soup.find_all('scheduledatetime')
    airport = soup.find_all('airport')
    chkinrange = soup.find_all('carousel')
    gatenumber = soup.find_all('exitnumber')
    remark = soup.find_all('remark')
    terminalid = soup.find_all('terminalid')

    for code in flightid:
        flightidlist.append(code.text)    
    for code in scheduledatetime:
        scheduledatetimelist.append(code.text)
    for code in airport:
        airportlist.append(code.text)
    for code in chkinrange:
        chkinrangelist.append(code.text)
    for code in gatenumber:
        gatenumberlist.append(code.text)    
    for code in remark:
        remarklist.append(code.text)
    for code in terminalid:
        terminalidlist.append(code.text)    

    scheduledatetimelist = scheduledatetimelist[:30]
    flightidlist = flightidlist[:30]
    airportlist = airportlist[:30]
    chkinrangelist = chkinrangelist[:30]
    gatenumberlist = gatenumberlist[:30]
    remarklist = remarklist[:30]
    terminalidlist = terminalidlist[:30]


    airplane = [flightidlist, scheduledatetimelist, airportlist, chkinrangelist, gatenumberlist, remarklist, terminalidlist]


    return render_template('arrival.html', airplane = airplane, flight_id = flight_id)


