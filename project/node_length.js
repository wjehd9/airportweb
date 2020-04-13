var deg2radMultiplier = Math.PI / 180;
var lat1, lng1, lat2, lng2;
var radius = 6378.137;
var dlng, meter;

// 노드와 노드 사이의 거리를 구하기 위한 클래스
class nodedistance {
    constructor(a, b) {
        this.ax = a.lng();
        this.ay = a.lat();
        this.bx = b.lng();
        this.by = b.lat();
    }

    far() {
        lng1 = this.ax * deg2radMultiplier;
        lat1 = this.ay * deg2radMultiplier;
        lng2 = this.bx * deg2radMultiplier;
        lat2 = this.by * deg2radMultiplier;

        dlng = lng2 - lng1;
        meter = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(dlng)) * radius * 1000;
        return meter;
    }
}

var length = [];
let temp;

for(var i = 0; i < straight_node.length; i++) {
    temp = new nodedistance(straight_node[i][0], straight_node[i][1]);
    length[i] = parseFloat(temp.far());
}

// 기준 - 터미널
g.addVertex('T5', { N0: length[0] });
g.addVertex('T6', { N3: length[7], N4: length[8], '엔제리너스(동편)': length[391] });
g.addVertex('T7', { N4: length[9] });
g.addVertex('T8', { N4: length[10] });
g.addVertex('T9', { N5: length[12] });
g.addVertex('T10', { N6: length[15] });
g.addVertex('T11', { N7: length[23] });
g.addVertex('T12', { N14: length[33] });
g.addVertex('T14', { N17: length[43] });
g.addVertex('T15', { N20: length[54] });
g.addVertex('T16', { N23: length[62] });
g.addVertex('T17', { N23: length[66] });
g.addVertex('T18', { N24: length[69] });
g.addVertex('T19', { N24: length[68] });
g.addVertex('T20', { N24: length[67] });
g.addVertex('T21', { N21: length[273] });
g.addVertex('T22', { N21: length[59] });
g.addVertex('T23', { N18: length[51] });
g.addVertex('T24', { N15: length[40] });
g.addVertex('T25', { N10: length[27] });
g.addVertex('T26', { N27: length[274] });
g.addVertex('T27', { N28: length[74] });
g.addVertex('T28', { N32: length[79] });
g.addVertex('T29', { N41: length[89] });
g.addVertex('T30', { N45: length[96] });
g.addVertex('T31', { N48: length[102] });
g.addVertex('T32', { N51: length[109] });
g.addVertex('T33', { N54: length[123] });
g.addVertex('T34', { N53: length[128], N54: length[129] });
g.addVertex('T35', { N54: length[134], N55: length[133] });
g.addVertex('T36', { N55: length[132] });
g.addVertex('T37', { N52: length[125], N55: length[131] });
g.addVertex('T38', { N52: length[124], N55: length[130] });
g.addVertex('T39', { N52: length[120] });
g.addVertex('T40', { N49: length[106] });
g.addVertex('T41', { N46: length[99] });
g.addVertex('T42', { N57: length[136] });
g.addVertex('T43', { N59: length[276] });
g.addVertex('T45', { N61: length[146] });
g.addVertex('T46', { N63: length[154] });
g.addVertex('T47', { N65: length[158] });
g.addVertex('T48', { N65: length[160] });
g.addVertex('T49', { N64: length[162], N65: length[161] });
g.addVertex('T50', { N64: length[163] });
g.addVertex('T101', { N79: length[215], N80: length[216] });
g.addVertex('T102', { N78: length[212], N79: length[214] });
g.addVertex('T103', { N80: length[219], N81: length[220] });
g.addVertex('T104', { N78: length[211] });
g.addVertex('T105', { N81: length[218] });
g.addVertex('T106', { N78: length[210] });
g.addVertex('T107', { N77: length[278] });
g.addVertex('T108', { N75: length[203] });
g.addVertex('T109', { N74: length[199] });
g.addVertex('T110', { N72: length[196] });
g.addVertex('T111', { N71: length[192] });
g.addVertex('T112', { N69: length[189] });
g.addVertex('T113', { N68: length[183] });
g.addVertex('T114', { N66: length[180] });
g.addVertex('T115', { N84: length[171] });
g.addVertex('T117', { N86: length[280] });
g.addVertex('T118', { N90: length[224] });
g.addVertex('T119', { N91: length[166], T120: length[538]});
g.addVertex('T120', { N91: length[537], T119: length[538]});
g.addVertex('T121', { N94: length[238] });
g.addVertex('T122', { N92: length[235] });
g.addVertex('T123', { N97: length[245] });
g.addVertex('T124', { N95: length[242] });
g.addVertex('T125', { N100: length[256] });
g.addVertex('T126', { N98: length[253] });
g.addVertex('T127', { N103: length[263] });
g.addVertex('T128', { N101: length[260] });
g.addVertex('T129', { N105: length[272] });
g.addVertex('T130', { N104: length[269] });
g.addVertex('T131', { N102: length[267], N105: length[271] });
g.addVertex('T132', { N102: length[266], N104: length[270] });

g.addVertex('1번 출국장', { N107: length[285] });
g.addVertex('2번 출국장', { N120: length[293] });
g.addVertex('3번 출국장', { N25: length[385], N26: length[386], '그랜드면세점(향수/화장품)': length[454], '신라면세점1(명품브랜드)': length[457] });
g.addVertex('4번 출국장', { N140: length[346] });
g.addVertex('5번 출국장', { N40: length[361], N56: length[360], '신라면세점5(향수/화장품)': length[512], '신세계면세점8(명품브랜드)': length[503] });
g.addVertex('6번 출국장', { N154: length[382] });

g.addVertex('A 체크인 카운터', { N108: length[295], N109: length[296] });
g.addVertex('B 체크인 카운터', { N108: length[298], N112: length[299], N114: length[303] });
g.addVertex('C 체크인 카운터', { N114: length[304], N117: length[305], N121: length[309], '신한은행 환전소3': length[407] });
g.addVertex('D 체크인 카운터', { N121: length[310], N122: length[311], N124: length[315] });
g.addVertex('E 체크인 카운터', { N124: length[316], N125: length[317], N127: length[321], '플레이와이파이': length[451] });
g.addVertex('F 체크인 카운터', { N127: length[322], N128: length[323], N130: length[327], '하나은행 환전소1': length[460] });
g.addVertex('G 체크인 카운터', { N130: length[328], N131: length[333], N132: length[329] });
g.addVertex('H 체크인 카운터', { N137: length[339], N138: length[340], N141: length[344], 'SK로밍센터1': length[478] });
g.addVertex('J 체크인 카운터', { N141: length[348], N142: length[349], N144: length[353] });
g.addVertex('K 체크인 카운터', { N144: length[354], N145: length[355], N147: length[359], '신한은행 환전소2': length[506], 'KT로밍센터2': length[506], 'LG유플러스로밍센터1': length[506], 'SKT텔레콤': length[506] });
g.addVertex('L 체크인 카운터', { N147: length[363], N148: length[364], N150: length[368], '우리은행 환전소3': length[515] });
g.addVertex('M 체크인 카운터', { N150: length[369], N151: length[370], N153: length[374] });
g.addVertex('N 체크인 카운터', { N153: length[375], N155: length[384], N156: length[376], 와이파이도시락: length[523] });

// 기준 - 시설
g.addVertex(facility_name[1], { N88: length[288], 케르반: length[230], 케세이호: length[227] });
g.addVertex(facility_name[2], { N37: length[275] });
g.addVertex(facility_name[3], { N82: length[175] });
g.addVertex(facility_name[4], { N66: length[177], N82: length[176] });
g.addVertex(facility_name[5], { N15: length[44], N16: length[45], N18: length[46], N19: length[47] });
g.addVertex(facility_name[6], { N60: length[151], N61: length[150], N62: length[153], N63: length[152] });
g.addVertex(facility_name[7], { N49: length[110], N50: length[111], N52: length[113], N53: length[114] });
g.addVertex(facility_name[8], { N88: length[229], N92: length[234], N93: length[232], 밥이답이다: length[230] });
g.addVertex(facility_name[9], { N87: length[279], N90: length[226], 밥이답이다: length[227] });
g.addVertex(facility_name[10], { N96: length[249], N97: length[250], N99: length[251], N100: length[252] });
g.addVertex(facility_name[11], { N1: length[18], N6: length[17], N7: length[19], N8: length[20], N106: length[389] });
g.addVertex(facility_name[12], { N58: length[143], N59: length[142], N60: length[145], N61: length[144], N154: length[380] });
g.addVertex(facility_name[13], { N13: length[34], N14: length[35], N16: length[37], N17: length[38] });
g.addVertex(facility_name[14], { N57: length[517], N56: length[518] });
g.addVertex(facility_name[15], { N19: length[431], N16: length[432], N15: length[433], N18: length[430] });
g.addVertex(facility_name[16], { N6: length[397], N1: length[398], N106: length[399] });
g.addVertex(facility_name[17], { N130: length[468], N131: length[469] });
g.addVertex(facility_name[18], { N112: length[409], N117: length[410] });
g.addVertex(facility_name[19], { N112: length[409], N117: length[410] });
g.addVertex(facility_name[20], { N16: length[427], N13: length[428], N15: length[429] });
g.addVertex(facility_name[21], { N154: length[521] });
g.addVertex(facility_name[22], { N22: length[438], N23: length[439], N20: length[440], N19: length[441] });
g.addVertex(facility_name[23], { N22: length[434], N23: length[435], N20: length[436], N19: length[437] });
g.addVertex(facility_name[24], { N50: length[497], N49: length[498] });
g.addVertex(facility_name[25], { N4: length[390], T6: length[391], N3: length[392] });
g.addVertex(facility_name[26], { N64: length[529], N65: length[530] });
g.addVertex(facility_name[27], { N47: length[495], N50: length[496] });
g.addVertex(facility_name[28], { N24: length[442], N23: length[443], N22: length[444], N21: length[445] });
g.addVertex(facility_name[29], { N47: length[535], N50: length[536] });
g.addVertex(facility_name[30], { N44: length[483], N42: length[484] });
g.addVertex(facility_name[31], { N9: length[416], N10: length[417], N12: length[418] });
g.addVertex(facility_name[32], { N54: length[499], N53: length[500], N55: length[501] });
g.addVertex(facility_name[33], { N47: length[489], N44: length[490] });
g.addVertex(facility_name[34], { N127: length[459], 'F 체크인 카운터': length[460], N130: length[461] });
g.addVertex(facility_name[35], { N117: length[411], N122: length[412] });
g.addVertex(facility_name[36], { N117: length[411], N122: length[412] });
g.addVertex(facility_name[37], { N144: length[505], 'K 체크인 카운터': length[506], N147: length[507] });
g.addVertex(facility_name[38], { N114: length[406], 'C 체크인 카운터': length[407], N121: length[408] });
g.addVertex(facility_name[39], { N115: length[404], N119: length[405] });
g.addVertex(facility_name[40], { N145: length[508], N148: length[509] });
g.addVertex(facility_name[41], { N145: length[510], N148: length[511] });
g.addVertex(facility_name[42], { N12: length[534] });
g.addVertex(facility_name[43], { N147: length[514], 'L 체크인 카운터': length[515], N150: length[516] });
g.addVertex(facility_name[44], { N24: length[446], N23: length[447], N22: length[448], N21: length[449] });
g.addVertex(facility_name[45], { N7: length[400] });
g.addVertex(facility_name[46], { N9: length[533] });
g.addVertex(facility_name[47], { N25: length[456], N26: length[458] });
g.addVertex(facility_name[48], { N119: length[531], N9: length[532] });
g.addVertex(facility_name[49], { N9: length[413], N10: length[414], N12: length[415] });
g.addVertex(facility_name[50], { N63: length[525], N62: length[526], N64: length[527], N65: length[528] });
g.addVertex(facility_name[51], { N58: length[519], N59: length[520] });
g.addVertex(facility_name[52], { N56: length[513] });
g.addVertex(facility_name[53], { N30: length[476] });
g.addVertex(facility_name[54], { N29: length[473], N30: length[474] });
g.addVertex(facility_name[55], { N27: length[465], N26: length[466], N28: length[467] });
g.addVertex(facility_name[56], { N29: length[471], N30: length[472] });
g.addVertex(facility_name[57], { N27: length[462], N26: length[463], N28: length[464] });
g.addVertex(facility_name[58], { N34: length[480], N140: length[481] });
g.addVertex(facility_name[59], { N140: length[482] });
g.addVertex(facility_name[60], { N40: length[502], N56: length[504] });
g.addVertex(facility_name[61], { N48: length[493], N47: length[494] });
g.addVertex(facility_name[62], { N8: length[401], N111: length[402], N115: length[403] });
g.addVertex(facility_name[63], { N4: length[393], N3: length[394], N2: length[395], N5: length[396] });
g.addVertex(facility_name[64], { N12: length[425], N13: length[426] });
g.addVertex(facility_name[65], { N9: length[422], N10: length[423], N12: length[424] });
g.addVertex(facility_name[66], { N9: length[419], N10: length[420], N12: length[421] });
g.addVertex(facility_name[67], { N48: length[491], N47: length[492] });
g.addVertex(facility_name[68], { N47: length[485], N44: length[486] });
g.addVertex(facility_name[69], { N47: length[487], N44: length[488] });
g.addVertex(facility_name[70], { N25: length[453], N26: length[455] });
g.addVertex(facility_name[71], { N30: length[475] });
g.addVertex(facility_name[72], { N131: length[470] });
g.addVertex(facility_name[73], { N144: length[505], 'K 체크인 카운터': length[506], N147: length[507] });
g.addVertex(facility_name[74], { N144: length[505], 'K 체크인 카운터': length[506], N147: length[507] });
g.addVertex(facility_name[75], { N144: length[505], 'K 체크인 카운터': length[506], N147: length[507] });
g.addVertex(facility_name[76], { N137: length[477], 'H 체크인 카운터': length[478], N141: length[479] });
g.addVertex(facility_name[77], { N153: length[522], 'N 체크인 카운터': length[523], N155: length[524] });
g.addVertex(facility_name[78], { N124: length[450], 'E 체크인 카운터': length[451], N127: length[452] });

// 기준 - 노드
g.addVertex('N0', { N1: length[1], N2: length[2], N3: length[3], T5: length[0] });


g.addVertex('N1', { N0: length[1], N2: length[4], N6: length[16], N106: length[22], 롯데리아: length[18], '던킨도너츠2호점': length[398] });
g.addVertex('N2', { N0: length[2], N1: length[4], N3: length[5], N5: length[13], '신세계면세점11(향수/화장품)': length[395] });
g.addVertex('N3', { N0: length[3], N2: length[5], N4: length[6], T6: length[7], '엔제리너스(동편)': length[392], '신세계면세점11(향수/화장품)': length[394] });
g.addVertex('N4', { N3: length[6], N5: length[11], T6: length[8], T7: length[9], T8: length[10], '엔제리너스(동편)': length[390], '신세계면세점11(향수/화장품)': length[393] });
g.addVertex('N5', { N2: length[13], N4: length[11], N6: length[14], T9: length[12], '신세계면세점11(향수/화장품)': length[396] });

g.addVertex('N6', { N1: length[16], N5: length[14], N7: length[21], T10: length[15], 롯데리아: length[17], '던킨도너츠2호점': length[397] });
g.addVertex('N7', { N6: length[21], N8: length[24], T11: length[23], 롯데리아: length[19], '롯데면세점2(주류/담배)': length[400] });
g.addVertex('N8', { N7: length[24], N106: length[281], N111: length[283], N115: length[25], 롯데리아: length[20], '신세계면세점10(향수/화장품)': length[401] });
g.addVertex('N9', { N10: length[26], N12: length[30], N25: length[388], N119: length[292], '신라면세점2(명품브랜드)': length[532], '롯데면세점3(주류/담배)': length[533], '신라면세점3(명품브랜드)': length[413], '파리크라상': length[416], 'SM면세점3(주류/담배)': length[419], 'SM면세점2(향수/화장품)': length[422] });
g.addVertex('N10', { N9: length[26], N11: length[28], N25: length[70], T25: length[27], '신라면세점3(명품브랜드)': length[414], '파리크라상': length[417], 'SM면세점3(주류/담배)': length[420], 'SM면세점2(향수/화장품)': length[423] });


g.addVertex('N11', { N10: length[28], N12: length[29] });
g.addVertex('N12', { N9: length[30], N11: length[29], N13: length[31], '신라면세점3(명품브랜드)': length[415], '파리크라상': length[418], 'SM면세점3(주류/담배)': length[421], 'SM면세점2(향수/화장품)': length[424], '우리은행 환전소2': length[534], 'SM면세점1(명품브랜드)': length[425] });
g.addVertex('N13', { N12: length[31], N14: length[32], N16: length[36], 공닭: length[34], 'SM면세점1(명품브랜드)': length[426], '베스킨라빈스31(탑승게이트)': length[428] });
g.addVertex('N14', { N13: length[32], N17: length[39], T12: length[33], 공닭: length[35] });
g.addVertex('N15', { N16: length[41], N18: length[48], T24: length[40], '라그릴리아 비스트로': length[44], '베스킨라빈스31(탑승게이트)': length[429], '던킨도너츠1호점': length[433] });

g.addVertex('N16', { N13: length[36], N15: length[41], N17: length[42], N19: length[49], 공닭: length[37], '라그릴리아 비스트로': length[45], '베스킨라빈스31(탑승게이트)': length[427], '던킨도너츠1호점': length[432] });
g.addVertex('N17', { N14: length[39], N16: length[42], N20: length[50], T14: length[43], 공닭: length[38] });
g.addVertex('N18', { N15: length[48], N19: length[52], N21: length[55], T23: length[51], '라그릴리아 비스트로': length[46], '던킨도너츠1호점': length[430] });
g.addVertex('N19', { N16: length[49], N18: length[52], N20: length[53], N21: length[56], N22: length[57], '라그릴리아 비스트로': length[47], '던킨도너츠1호점': length[431], '로봇김밥': length[437], '고래사어묵': length[441] });
g.addVertex('N20', { N17: length[50], N19: length[53], N23: length[58], T15: length[54], '로봇김밥': length[436], '고래사어묵': length[440] });


g.addVertex('N21', { N18: length[55], N19: length[56], N22: length[60], N24: length[63], T21: length[273], T22: length[59], '잠바주스(T1)': length[445], '롯데면세점1(주류/담배)': length[449] });
g.addVertex('N22', { N19: length[57], N21: length[60], N23: length[61], N24: length[64], '로봇김밥': length[434], '고래사어묵': length[438], '잠바주스(T1)': length[444], '롯데면세점1(주류/담배)': length[448] });
g.addVertex('N23', { N20: length[58], N22: length[61], N24: length[65], T16: length[62], T17: length[66], '로봇김밥': length[435], '고래사어묵': length[439], '잠바주스(T1)': length[443], '롯데면세점1(주류/담배)': length[447] });
g.addVertex('N24', { N21: length[63], N22: length[64], N23: length[65], T18: length[69], T19: length[68], T20: length[67], '잠바주스(T1)': length[442], '롯데면세점1(주류/담배)': length[446] });
g.addVertex('N25', { N9: length[388], N10: length[70], N26: length[71], '신라면세점1(명품브랜드)': length[456], '그랜드면세점(향수/화장품)': length[453] });

g.addVertex('N26', { N25: length[71], N27: length[72], '신라면세점1(명품브랜드)': length[458], '그랜드면세점(향수/화장품)': length[455], '신세계면세점5(명품브랜드)': length[463], '신세계면세점3(명품브랜드)': length[466] });
g.addVertex('N27', { N26: length[72], N28: length[73], T26: length[274], '신세계면세점5(명품브랜드)': length[462], '신세계면세점3(명품브랜드)': length[465] });
g.addVertex('N28', { N27: length[73], N29: length[75], T27: length[74], '신세계면세점5(명품브랜드)': length[464], '신세계면세점3(명품브랜드)': length[467] });
g.addVertex('N29', { N28: length[75], N30: length[76], N85: length[164], '신세계면세점4(명품브랜드)': length[471], '신세계면세점2(명품브랜드)': length[473] });
g.addVertex('N30', { N29: length[76], N31: length[77], '신세계면세점4(명품브랜드)': length[472], '신세계면세점2(명품브랜드)': length[474], '엔타스면세점(주류/담배)': length[475], '신세계면세점1(명품브랜드)': length[476] });


g.addVertex('N31', { N30: length[76], N32: length[78], N89: length[165] });
g.addVertex('N32', { N31: length[78], N33: length[80], T28: length[79] });
g.addVertex('N33', { N32: length[80], N34: length[81] });
g.addVertex('N34', { N33: length[81], N35: length[82], N140: length[85], '신세계면세점6(명품브랜드)': length[480] });
g.addVertex('N35', { N34: length[82], N36: length[83] });

g.addVertex('N36', { N35: length[83], N37: length[84] });
g.addVertex('N37', { N36: length[84], 비비고: length[275] });
g.addVertex('N38', { N39: length[86], N140: length[345] });
g.addVertex('N39', { N38: length[86], N40: length[87] });
g.addVertex('N40', { N39: length[87], N41: length[88], N42: length[90], N56: length[135], '신세계면세점8(명품브랜드)': length[502] });

g.addVertex('N41', { N40: length[88], N43: length[92], T29: length[89] });
g.addVertex('N42', { N40: length[90], N43: length[91], N44: length[93], '파리바게뜨(탑승게이트)': length[484] });
g.addVertex('N43', { N41: length[92], N42: length[91], N45: length[94] });
g.addVertex('N44', { N42: length[93], N45: length[95], N47: length[97], '파리바게뜨(탑승게이트)': length[483], '시티면세점2(향수/화장품)': length[485], '시티면세점3(주류/담배)': length[487], '던킨 커피하우스': length[489] });
g.addVertex('N45', { N43: length[94], N44: length[95], N48: length[98], T30: length[96] });

g.addVertex('N46', { N47: length[100], N49: length[103], T41: length[99] });
g.addVertex('N47', { N44: length[97], N46: length[100], N48: length[101], N50: length[104], '시티면세점2(향수/화장품)': length[486], '시티면세점3(주류/담배)': length[488], '던킨 커피하우스': length[490], '시티면세점1(명품브랜드)': length[492], '신세계면세점9(명품브랜드)': length[494], '위니비니': length[495], '커피엣웍스1호점': length[535] });
g.addVertex('N48', { N45: length[98], N47: length[101], N51: length[105], T31: length[102], '시티면세점1(명품브랜드)': length[491], '신세계면세점9(명품브랜드)': length[493] });
g.addVertex('N49', { N46: length[103], N50: length[107], N52: length[112], T40: length[106], 스트릿: length[110], '엔터엔스프레즐(탑승게이트)': length[498] });
g.addVertex('N50', { N47: length[104], N49: length[107], N51: length[108], N52: length[115], N53: length[116], N54: length[117], 스트릿: length[111], '위니비니': length[496], '커피엣웍스1호점': length[536], '엔터엔스프레즐(탑승게이트)': length[497] });


g.addVertex('N51', { N48: length[105], N50: length[108], N53: length[118], N54: length[119], T32: length[109] });
g.addVertex('N52', { N49: length[112], N50: length[115], N53: length[121], N55: length[126], T37: length[125], T38: length[124], T39: length[120], 스트릿: length[113] });
g.addVertex('N53', { N50: length[116], N51: length[118], N52: length[121], N54: length[122], N55: length[127], T34: length[128], 스트릿: length[114], '파스쿠찌': length[500] });
g.addVertex('N54', { N50: length[117], N51: length[119], N53: length[122], T33: length[123], T34: length[129], T35: length[134], '파스쿠찌': length[499] });
g.addVertex('N55', { N52: length[126], N53: length[127], T35: length[133], T36: length[132], T37: length[131], T38: length[130], '파스쿠찌': length[501] });

g.addVertex('N56', { N40: length[135], N57: length[137], N58: length[139], '신세계면세점8(명품브랜드)': length[504], '신라면세점5(향수/화장품)': length[513], '공차': length[518] });
g.addVertex('N57', { N56: length[137], N59: length[138], T42: length[136], '공차': length[517] });
g.addVertex('N58', { N56: length[139], N59: length[277], N154: length[141], 모스버거: length[143], '신라면세점4(향수/화장품)': length[519] });
g.addVertex('N59', { N57: length[138], N58: length[277], N61: length[140], T43: length[276], 모스버거: length[142], '신라면세점4(향수/화장품)': length[520] });
g.addVertex('N60', { N61: length[149], N62: length[149], N154: length[381], 모스버거: length[145], 사누끼보레: length[151] });


g.addVertex('N61', { N59: length[140], N60: length[149], N63: length[148], T45: length[146], 모스버거: length[144], 사누끼보레: length[150] });
g.addVertex('N62', { N60: length[149], N63: length[155], N64: length[157], 사누끼보레: length[153], '신라면세점3(향수/화장품)': length[526] });
g.addVertex('N63', { N61: length[148], N62: length[155], N65: length[156], T46: length[154], 사누끼보레: length[152], '신라면세점3(향수/화장품)': length[525] });
g.addVertex('N64', { N62: length[157], N65: length[159], T49: length[162], T50: length[163], '신라면세점3(향수/화장품)': length[527], '엔제리너스(서편)': length[529] });
g.addVertex('N65', { N63: length[156], N64: length[159], T47: length[158], T48: length[160], T49: length[161], '신라면세점3(향수/화장품)': length[528], '엔제리너스(서편)': length[530] });

g.addVertex('N66', { N67: length[181], N69: length[184], N70: length[185], N82: length[178], T114: length[180], 남산왕돈까스: length[177] });
g.addVertex('N67', { N66: length[181], N68: length[182], N69: length[186], N70: length[187], N82: length[179], N83: length[174] });
g.addVertex('N68', { N67: length[182], N71: length[188], T113: length[183] });
g.addVertex('N69', { N66: length[184], N67: length[186], N70: length[190], N72: length[193], T112: length[189] });
g.addVertex('N70', { N66: length[185], N67: length[187], N69: length[190], N71: length[191], N73: length[194] });


g.addVertex('N71', { N68: length[188], N70: length[191], N74: length[195], T111: length[192] });
g.addVertex('N72', { N69: length[193], N73: length[197], N75: length[200], T110: length[196] });
g.addVertex('N73', { N70: length[194], N72: length[197], N74: length[198], N76: length[201] });
g.addVertex('N74', { N71: length[195], N73: length[198], N77: length[202], T109: length[199] });
g.addVertex('N75', { N72: length[200], N76: length[204], N78: length[206], T108: length[203] });

g.addVertex('N76', { N73: length[201], N75: length[204], N77: length[205], N79: length[207], N80: length[208] });
g.addVertex('N77', { N74: length[202], N76: length[205], N81: length[209], T107: length[278] });
g.addVertex('N78', { N75: length[206], N79: length[213], T102: length[212], T104: length[211], T106: length[210] });
g.addVertex('N79', { N76: length[207], N78: length[213], T101: length[215], T102: length[214] });
g.addVertex('N80', { N76: length[208], N81: length[217], T101: length[216], T103: length[219] });


g.addVertex('N81', { N77: length[209], N80: length[217], T103: length[220], T105: length[218] });
g.addVertex('N82', { N66: length[178], N67: length[179], N83: length[173], 남산왕돈까스: length[176], 손수김밥: length[175] });
g.addVertex('N83', { N67: length[174], N82: length[173], N84: length[172], N88: length[221] });
g.addVertex('N84', { N83: length[172], N85: length[170], T115: length[171] });
g.addVertex('N85', { N84: length[170], N86: length[169] });

g.addVertex('N86', { N85: length[169], N89: length[168], T117: length[280] });
g.addVertex('N87', { N88: length[223], N90: length[225], 케세이호: length[279] });
g.addVertex('N88', { N83: length[221], N87: length[223], N89: length[222], N93: length[233], 밥이답이다: length[228], 케르반: length[229] });
g.addVertex('N89', { N86: length[168], N88: length[222], N91: length[167] });
g.addVertex('N90', { N87: length[225], T118: length[224], 케세이호: length[226] });


g.addVertex('N91', { N89: length[167], T119: length[166], T120: length[537] });
g.addVertex('N92', { N93: length[236], N95: length[239], T122: length[235], 케즈반: length[234] });
g.addVertex('N93', { N88: length[233], N92: length[236], N94: length[237], N96: length[240], 밥이답이다: length[231], 케즈반: length[232] });
g.addVertex('N94', { N93: length[237], N97: length[241], T121: length[238] });
g.addVertex('N95', { N92: length[239], N96: length[243], N98: length[246], T124: length[242] });

g.addVertex('N96', { N93: length[240], N95: length[243], N97: length[244], N99: length[247], 하이면우동: length[249] });
g.addVertex('N97', { N94: length[241], N96: length[244], N100: length[248], T123: length[245], 하이면우동: length[250] });
g.addVertex('N98', { N95: length[246], N99: length[254], N101: length[257], T126: length[253] });
g.addVertex('N99', { N96: length[247], N98: length[254], N100: length[255], N102: length[258], 하이면우동: length[251] });
g.addVertex('N100', { N97: length[248], N99: length[255], N103: length[259], T125: length[256], 하이면우동: length[252] });


g.addVertex('N101', { N98: length[257], N102: length[261], N104: length[264], T128: length[260] });
g.addVertex('N102', { N99: length[258], N101: length[261], N103: length[262], N104: length[265], T131: length[267], T132: length[266] });
g.addVertex('N103', { N100: length[259], N102: length[262], N105: length[268], T127: length[263] });
g.addVertex('N104', { N101: length[264], N102: length[265], T130: length[269], T132: length[270] });
g.addVertex('N105', { N103: length[268], T129: length[272], T131: length[271] });

g.addVertex('N106', { N1: length[22], N8: length[281], N107: length[282], '롯데리아': length[389], '던킨도너츠2호점': length[399] });
g.addVertex('N107', { N106: length[282], N111: length[284] });
g.addVertex('N108', { N114: length[302], '1번 출국장': length[286], 'A 체크인 카운터': length[295], 'B 체크인 카운터': length[298] });
g.addVertex('N109', { N110: length[297], N112: length[300], 'A 체크인 카운터': length[296] });
g.addVertex('N110', { N109: length[297] });


g.addVertex('N111', { N8: length[283], N107: length[284], N116: length[287], '신세계면세점10(향수/화장품)': length[402] });
g.addVertex('N112', { N109: length[300], N113: length[301], N117: length[307], 'B 체크인 카운터': length[299], '뚜레쥬르키오스크': length[409], '리나스': length[409] });
g.addVertex('N113', { N112: length[301] });
g.addVertex('N114', { N108: length[302], N121: length[308], 'B 체크인 카운터': length[303], 'C 체크인 카운터': length[304], '신한은행 환전소3': length[406] });
g.addVertex('N115', { N8: length[25], N116: length[288], N119: length[289], '신세계면세점10(향수/화장품)': length[403], '신한은행 환전소4': length[404] });

g.addVertex('N116', { N111: length[287], N115: length[288], N120: length[291] });
g.addVertex('N117', { N112: length[307], N118: length[306], N122: length[312], '뚜레쥬르키오스크': length[410], '리나스': length[410], '하나은행 환전소2': length[411], '신한은행 환전소1': length[411] });
g.addVertex('N118', { N117: length[306] });
g.addVertex('N119', { N9: length[292], N115: length[289], N120: length[290], '신한은행 환전소4': length[405], '신라면세점2(명품브랜드)': length[531] });
g.addVertex('N120', { N116: length[291], N119: length[290] });


g.addVertex('N121', { N114: length[308], N124: length[314], '2번 출국장': length[294], 'C 체크인 카운터': length[309], 'D 체크인 카운터': length[310], '신한은행 환전소3': length[408] });
g.addVertex('N122', { N117: length[312], N123: length[313], N125: length[319], 'D 체크인 카운터': length[311], '하나은행 환전소2': length[411], '신한은행 환전소1': length[411] });
g.addVertex('N123', { N122: length[313] });
g.addVertex('N124', { N121: length[314], N127: length[320], 'D 체크인 카운터': length[315], 'E 체크인 카운터': length[316], '플레이와이파이': length[450] });
g.addVertex('N125', { N122: length[319], N126: length[318], N128: length[325], 'E 체크인 카운터': length[317] });

g.addVertex('N126', { N125: length[318] });
g.addVertex('N127', { N124: length[320], N130: length[326], '3번 출국장': length[387], 'E 체크인 카운터': length[321], 'F 체크인 카운터': length[322], '플레이와이파이': length[452], '하나은행 환전소1': length[459] });
g.addVertex('N128', { N125: length[325], N129: length[324], N132: length[331], 'F 체크인 카운터': length[323] });
g.addVertex('N129', { N128: length[324] });
g.addVertex('N130', { N127: length[326], N131: length[332], 'F 체크인 카운터': length[327], 'G 체크인 카운터': length[328], '하나은행 환전소1': length[461], '뚜레쥬르카페': length[468] });


g.addVertex('N131', { N130: length[332], N134: length[334], 'G 체크인 카운터': length[333], '뚜레쥬르카페': length[469], 'KT로밍센터1': length[470] });
g.addVertex('N132', { N128: length[331], N133: length[330], N135: length[335], 'G 체크인 카운터': length[329] });
g.addVertex('N133', { N132: length[330] });
g.addVertex('N134', { N131: length[334], N135: length[336], N137: length[338] });
g.addVertex('N135', { N132: length[335], N134: length[336], N136: length[337], N138: length[142] });

g.addVertex('N136', { N135: length[337] });
g.addVertex('N137', { N134: length[338], N141: length[343], 'H 체크인 카운터': length[339], 'SK로밍센터1': length[477] });
g.addVertex('N138', { N135: length[342], N139: length[341], N142: length[351], 'H 체크인 카운터': length[340] });
g.addVertex('N139', { N138: length[341] });
g.addVertex('N140', { N34: length[85], N38: length[345], '신세계면세점6(명품브랜드)': length[481], '신세계면세점7(명품브랜드)': length[482] });


g.addVertex('N141', { N137: length[343], N144: length[352], '4번 출국장': length[347], 'H 체크인 카운터': length[344], 'J 체크인 카운터': length[348], 'SK로밍센터1': length[479] });
g.addVertex('N142', { N138: length[351], N143: length[350], N145: length[357], 'J 체크인 카운터': length[349] });
g.addVertex('N143', { N142: length[350] });
g.addVertex('N144', { N141: length[352], N147: length[358], 'J 체크인 카운터': length[353], 'K 체크인 카운터': length[354], '신한은행 환전소2': length[505], 'KT로밍센터2': length[505], 'LG유플러스로밍센터1': length[505], 'SKT텔레콤': length[505] });
g.addVertex('N145', { N142: length[357], N146: length[356], N148: length[366], 'K 체크인 카운터': length[355], '신한은행 환전소5': length[508], '우리은행 환전소1': length[510] });

g.addVertex('N146', { N145: length[356] });
g.addVertex('N147', { N144: length[358], N150: length[367], '5번 출국장': length[362], 'K 체크인 카운터': length[359], 'L 체크인 카운터': length[363], '신한은행 환전소2': length[507], 'KT로밍센터2': length[507], 'LG유플러스로밍센터1': length[507], 'SKT텔레콤': length[507], '우리은행 환전소3': length[514] });
g.addVertex('N148', { N145: length[366], N149: length[365], N151: length[372], 'L 체크인 카운터': length[364], '신한은행 환전소5': length[509], '우리은행 환전소1': length[511] });
g.addVertex('N149', { N148: length[365] });
g.addVertex('N150', { N147: length[367], N153: length[373], 'L 체크인 카운터': length[368], 'M 체크인 카운터': length[369], '우리은행 환전소3': length[516] });


g.addVertex('N151', { N148: length[372], N152: length[371], N156: length[378], 'M 체크인 카운터': length[370] });
g.addVertex('N152', { N151: length[371] });
g.addVertex('N153', { N150: length[373], N155: length[379], 'M 체크인 카운터': length[374], 'N 체크인 카운터': length[375], '와이파이도시락': length[522] });
g.addVertex('N154', { N58: length[141], N60: length[381], '모스버거': length[380], '빚은(탑승게이트)': length[521] });
g.addVertex('N155', { N153: length[379], '6번 출국장': length[383], 'N 체크인 카운터': length[384], '와이파이도시락': length[524] });

g.addVertex('N156', { N151: length[378], N157: length[377], 'N 체크인 카운터': length[376] });
g.addVertex('N157', { N156: length[377] });