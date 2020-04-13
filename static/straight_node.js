var straight_node = new Array();

for(var i = 0; i < length.length; i++) {
    straight_node[i] = new Array();
}

straight_node[0] = [cross_node[0], terminal_node[1]];
straight_node[1] = [cross_node[0], cross_node[1]];
straight_node[2] = [cross_node[0], cross_node[2]];
straight_node[3] = [cross_node[0], cross_node[3]];
straight_node[4] = [cross_node[1], cross_node[2]];

straight_node[5] = [cross_node[2], cross_node[3]];
straight_node[6] = [cross_node[3], cross_node[4]];
straight_node[7] = [cross_node[3], terminal_node[2]];
straight_node[8] = [cross_node[4], terminal_node[2]];
straight_node[9] = [cross_node[4], terminal_node[3]];


straight_node[10] = [cross_node[4], terminal_node[4]];
straight_node[11] = [cross_node[4], cross_node[5]];
straight_node[12] = [cross_node[5], terminal_node[5]];
straight_node[13] = [cross_node[2], cross_node[5]];
straight_node[14] = [cross_node[5], cross_node[6]];

straight_node[15] = [cross_node[6], terminal_node[6]];
straight_node[16] = [cross_node[1], cross_node[6]];
straight_node[17] = [cross_node[6], facility_node[11]];
straight_node[18] = [cross_node[1], facility_node[11]];
straight_node[19] = [cross_node[7], facility_node[11]];


straight_node[20] = [cross_node[8], facility_node[11]];
straight_node[21] = [cross_node[6], cross_node[7]];
straight_node[22] = [cross_node[1], cross_node[106]];
straight_node[23] = [cross_node[7], terminal_node[7]];
straight_node[24] = [cross_node[7], cross_node[8]];

straight_node[25] = [cross_node[8], cross_node[115]];
straight_node[26] = [cross_node[9], cross_node[10]];
straight_node[27] = [cross_node[10], terminal_node[20]];
straight_node[28] = [cross_node[10], cross_node[11]];
straight_node[29] = [cross_node[11], cross_node[12]];


straight_node[30] = [cross_node[9], cross_node[12]];
straight_node[31] = [cross_node[12], cross_node[13]];
straight_node[32] = [cross_node[13], cross_node[14]];
straight_node[33] = [cross_node[14], terminal_node[8]];
straight_node[34] = [cross_node[13], facility_node[13]];

straight_node[35] = [cross_node[14], facility_node[13]];
straight_node[36] = [cross_node[13], cross_node[16]];
straight_node[37] = [cross_node[16], facility_node[13]];
straight_node[38] = [cross_node[17], facility_node[13]];
straight_node[39] = [cross_node[14], cross_node[17]];


straight_node[40] = [cross_node[15], terminal_node[19]];
straight_node[41] = [cross_node[15], cross_node[16]];
straight_node[42] = [cross_node[16], cross_node[17]];
straight_node[43] = [cross_node[17], terminal_node[9]];
straight_node[44] = [cross_node[15], facility_node[5]];

straight_node[45] = [cross_node[16], facility_node[5]];
straight_node[46] = [cross_node[18], facility_node[5]];
straight_node[47] = [cross_node[19], facility_node[5]];
straight_node[48] = [cross_node[15], cross_node[18]];
straight_node[49] = [cross_node[16], cross_node[19]];


straight_node[50] = [cross_node[17], cross_node[20]];
straight_node[51] = [cross_node[18], terminal_node[18]];
straight_node[52] = [cross_node[18], cross_node[19]];
straight_node[53] = [cross_node[19], cross_node[20]];
straight_node[54] = [cross_node[20], terminal_node[10]];

straight_node[55] = [cross_node[18], cross_node[21]];
straight_node[56] = [cross_node[19], cross_node[21]];
straight_node[57] = [cross_node[19], cross_node[22]];
straight_node[58] = [cross_node[20], cross_node[23]];
straight_node[59] = [cross_node[21], terminal_node[17]];


straight_node[60] = [cross_node[21], cross_node[22]];
straight_node[61] = [cross_node[22], cross_node[23]];
straight_node[62] = [cross_node[23], terminal_node[11]];
straight_node[63] = [cross_node[21], cross_node[24]];
straight_node[64] = [cross_node[22], cross_node[24]];

straight_node[65] = [cross_node[23], cross_node[24]];
straight_node[66] = [cross_node[23], terminal_node[12]];
straight_node[67] = [cross_node[24], terminal_node[15]];
straight_node[68] = [cross_node[24], terminal_node[14]];
straight_node[69] = [cross_node[24], terminal_node[13]];


straight_node[70] = [cross_node[10], cross_node[25]];
straight_node[71] = [cross_node[25], cross_node[26]];
straight_node[72] = [cross_node[26], cross_node[27]];
straight_node[73] = [cross_node[27], cross_node[28]];
straight_node[74] = [cross_node[28], terminal_node[22]];

straight_node[75] = [cross_node[28], cross_node[29]];
straight_node[76] = [cross_node[29], cross_node[30]];
straight_node[77] = [cross_node[30], cross_node[31]];
straight_node[78] = [cross_node[31], cross_node[32]];
straight_node[79] = [cross_node[32], terminal_node[23]];


straight_node[80] = [cross_node[32], cross_node[33]];
straight_node[81] = [cross_node[33], cross_node[34]];
straight_node[82] = [cross_node[34], cross_node[35]];
straight_node[83] = [cross_node[35], cross_node[36]];
straight_node[84] = [cross_node[36], cross_node[37]];

straight_node[85] = [cross_node[34], cross_node[140]];
straight_node[86] = [cross_node[38], cross_node[39]];
straight_node[87] = [cross_node[39], cross_node[40]];
straight_node[88] = [cross_node[40], cross_node[41]];
straight_node[89] = [cross_node[41], terminal_node[24]];


straight_node[90] = [cross_node[40], cross_node[42]];
straight_node[91] = [cross_node[42], cross_node[43]];
straight_node[92] = [cross_node[41], cross_node[43]];
straight_node[93] = [cross_node[42], cross_node[44]];
straight_node[94] = [cross_node[43], cross_node[45]];

straight_node[95] = [cross_node[44], cross_node[45]];
straight_node[96] = [cross_node[45], terminal_node[25]];
straight_node[97] = [cross_node[44], cross_node[47]];
straight_node[98] = [cross_node[45], cross_node[48]];
straight_node[99] = [cross_node[46], terminal_node[36]];


straight_node[100] = [cross_node[46], cross_node[47]];
straight_node[101] = [cross_node[47], cross_node[48]];
straight_node[102] = [cross_node[48], terminal_node[26]];
straight_node[103] = [cross_node[46], cross_node[49]];
straight_node[104] = [cross_node[47], cross_node[50]];

straight_node[105] = [cross_node[48], cross_node[51]];
straight_node[106] = [cross_node[49], terminal_node[35]];
straight_node[107] = [cross_node[49], cross_node[50]];
straight_node[108] = [cross_node[50], cross_node[51]];
straight_node[109] = [cross_node[51], terminal_node[27]];


straight_node[110] = [cross_node[49], facility_node[7]];
straight_node[111] = [cross_node[50], facility_node[7]];
straight_node[112] = [cross_node[49], cross_node[52]];
straight_node[113] = [cross_node[52], facility_node[7]];
straight_node[114] = [cross_node[53], facility_node[7]];

straight_node[115] = [cross_node[50], cross_node[52]];
straight_node[116] = [cross_node[50], cross_node[53]];
straight_node[117] = [cross_node[50], cross_node[54]];
straight_node[118] = [cross_node[51], cross_node[53]];
straight_node[119] = [cross_node[51], cross_node[54]];


straight_node[120] = [cross_node[52], terminal_node[34]];
straight_node[121] = [cross_node[52], cross_node[53]];
straight_node[122] = [cross_node[53], cross_node[54]];
straight_node[123] = [cross_node[54], terminal_node[28]];
straight_node[124] = [cross_node[52], terminal_node[33]];

straight_node[125] = [cross_node[52], terminal_node[32]];
straight_node[126] = [cross_node[52], cross_node[55]];
straight_node[127] = [cross_node[53], cross_node[55]];
straight_node[128] = [cross_node[53], terminal_node[29]];
straight_node[129] = [cross_node[54], terminal_node[29]];


straight_node[130] = [cross_node[55], terminal_node[33]];
straight_node[131] = [cross_node[55], terminal_node[32]];
straight_node[132] = [cross_node[55], terminal_node[31]];
straight_node[133] = [cross_node[55], terminal_node[30]];
straight_node[134] = [cross_node[54], terminal_node[30]];

straight_node[135] = [cross_node[40], cross_node[56]];
straight_node[136] = [cross_node[57], terminal_node[37]];
straight_node[137] = [cross_node[56], cross_node[57]];
straight_node[138] = [cross_node[57], cross_node[59]];
straight_node[139] = [cross_node[56], cross_node[58]];


straight_node[140] = [cross_node[59], cross_node[61]];
straight_node[141] = [cross_node[58], cross_node[154]];
straight_node[142] = [cross_node[59], facility_node[12]];
straight_node[143] = [cross_node[58], facility_node[12]];
straight_node[144] = [cross_node[61], facility_node[12]];

straight_node[145] = [cross_node[60], facility_node[12]];
straight_node[146] = [cross_node[61], terminal_node[39]];
straight_node[147] = [cross_node[60], cross_node[61]];
straight_node[148] = [cross_node[61], cross_node[63]];
straight_node[149] = [cross_node[60], cross_node[62]];


straight_node[150] = [cross_node[61], facility_node[6]];
straight_node[151] = [cross_node[60], facility_node[6]];
straight_node[152] = [cross_node[63], facility_node[6]];
straight_node[153] = [cross_node[62], facility_node[6]];
straight_node[154] = [cross_node[63], terminal_node[40]];

straight_node[155] = [cross_node[62], cross_node[63]];
straight_node[156] = [cross_node[63], cross_node[65]];
straight_node[157] = [cross_node[62], cross_node[64]];
straight_node[158] = [cross_node[65], terminal_node[41]];
straight_node[159] = [cross_node[64], cross_node[65]];


straight_node[160] = [cross_node[65], terminal_node[42]];
straight_node[161] = [cross_node[65], terminal_node[43]];
straight_node[162] = [cross_node[64], terminal_node[43]];
straight_node[163] = [cross_node[64], terminal_node[44]];
straight_node[164] = [cross_node[29], cross_node[85]];

straight_node[165] = [cross_node[31], cross_node[89]];
straight_node[166] = [cross_node[91], terminal_node[62]];
straight_node[167] = [cross_node[89], cross_node[91]];
straight_node[168] = [cross_node[86], cross_node[89]];
straight_node[169] = [cross_node[85], cross_node[86]];


straight_node[170] = [cross_node[84], cross_node[85]];
straight_node[171] = [cross_node[84], terminal_node[59]];
straight_node[172] = [cross_node[83], cross_node[84]];
straight_node[173] = [cross_node[82], cross_node[83]];
straight_node[174] = [cross_node[67], cross_node[83]];

straight_node[175] = [cross_node[82], facility_node[3]];
straight_node[176] = [cross_node[82], facility_node[4]];
straight_node[177] = [cross_node[66], facility_node[4]];
straight_node[178] = [cross_node[66], cross_node[82]];
straight_node[179] = [cross_node[67], cross_node[82]];


straight_node[180] = [cross_node[66], terminal_node[58]];
straight_node[181] = [cross_node[66], cross_node[67]];
straight_node[182] = [cross_node[67], cross_node[68]];
straight_node[183] = [cross_node[68], terminal_node[57]];
straight_node[184] = [cross_node[66], cross_node[69]];

straight_node[185] = [cross_node[66], cross_node[70]];
straight_node[186] = [cross_node[67], cross_node[69]];
straight_node[187] = [cross_node[67], cross_node[70]];
straight_node[188] = [cross_node[68], cross_node[71]];
straight_node[189] = [cross_node[69], terminal_node[56]];


straight_node[190] = [cross_node[69], cross_node[70]];
straight_node[191] = [cross_node[70], cross_node[71]];
straight_node[192] = [cross_node[71], terminal_node[55]];
straight_node[193] = [cross_node[69], cross_node[72]];
straight_node[194] = [cross_node[70], cross_node[73]];

straight_node[195] = [cross_node[71], cross_node[74]];
straight_node[196] = [cross_node[72], terminal_node[54]];
straight_node[197] = [cross_node[72], cross_node[73]];
straight_node[198] = [cross_node[73], cross_node[74]];
straight_node[199] = [cross_node[74], terminal_node[53]];


straight_node[200] = [cross_node[72], cross_node[75]];
straight_node[201] = [cross_node[73], cross_node[76]];
straight_node[202] = [cross_node[74], cross_node[77]];
straight_node[203] = [cross_node[75], terminal_node[52]];
straight_node[204] = [cross_node[75], cross_node[76]];

straight_node[205] = [cross_node[76], cross_node[77]];
straight_node[206] = [cross_node[75], cross_node[78]];
straight_node[207] = [cross_node[76], cross_node[79]];
straight_node[208] = [cross_node[76], cross_node[80]];
straight_node[209] = [cross_node[77], cross_node[81]];


straight_node[210] = [cross_node[78], terminal_node[50]];
straight_node[211] = [cross_node[78], terminal_node[48]];
straight_node[212] = [cross_node[78], terminal_node[46]];
straight_node[213] = [cross_node[78], cross_node[79]];
straight_node[214] = [cross_node[79], terminal_node[46]];

straight_node[215] = [cross_node[79], terminal_node[45]];
straight_node[216] = [cross_node[80], terminal_node[45]];
straight_node[217] = [cross_node[80], cross_node[81]];
straight_node[218] = [cross_node[81], terminal_node[49]];
straight_node[219] = [cross_node[80], terminal_node[47]];


straight_node[220] = [cross_node[81], terminal_node[47]];
straight_node[221] = [cross_node[83], cross_node[88]];
straight_node[222] = [cross_node[88], cross_node[89]];
straight_node[223] = [cross_node[87], cross_node[88]];
straight_node[224] = [cross_node[90], terminal_node[61]];

straight_node[225] = [cross_node[87], cross_node[90]];
straight_node[226] = [cross_node[90], facility_node[9]];
straight_node[227] = [facility_node[1], facility_node[9]];
straight_node[228] = [cross_node[88], facility_node[1]];
straight_node[229] = [cross_node[88], facility_node[8]];


straight_node[230] = [facility_node[1], facility_node[8]];
straight_node[231] = [cross_node[93], facility_node[1]];
straight_node[232] = [cross_node[93], facility_node[8]];
straight_node[233] = [cross_node[88], cross_node[93]];
straight_node[234] = [cross_node[92], facility_node[8]];

straight_node[235] = [cross_node[92], terminal_node[65]];
straight_node[236] = [cross_node[92], cross_node[93]];
straight_node[237] = [cross_node[93], cross_node[94]];
straight_node[238] = [cross_node[94], terminal_node[64]];
straight_node[239] = [cross_node[92], cross_node[95]];


straight_node[240] = [cross_node[93], cross_node[96]];
straight_node[241] = [cross_node[94], cross_node[97]];
straight_node[242] = [cross_node[95], terminal_node[67]];
straight_node[243] = [cross_node[95], cross_node[96]];
straight_node[244] = [cross_node[96], cross_node[97]];

straight_node[245] = [cross_node[97], terminal_node[66]];
straight_node[246] = [cross_node[95], cross_node[98]];
straight_node[247] = [cross_node[96], cross_node[99]];
straight_node[248] = [cross_node[97], cross_node[100]];
straight_node[249] = [cross_node[96], facility_node[10]];


straight_node[250] = [cross_node[97], facility_node[10]];
straight_node[251] = [cross_node[99], facility_node[10]];
straight_node[252] = [cross_node[100], facility_node[10]];
straight_node[253] = [cross_node[98], terminal_node[69]];
straight_node[254] = [cross_node[98], cross_node[99]];

straight_node[255] = [cross_node[99], cross_node[100]];
straight_node[256] = [cross_node[100], terminal_node[68]];
straight_node[257] = [cross_node[98], cross_node[101]];
straight_node[258] = [cross_node[99], cross_node[102]];
straight_node[259] = [cross_node[100], cross_node[103]];


straight_node[260] = [cross_node[101], terminal_node[71]];
straight_node[261] = [cross_node[101], cross_node[102]];
straight_node[262] = [cross_node[102], cross_node[103]];
straight_node[263] = [cross_node[103], terminal_node[70]];
straight_node[264] = [cross_node[101], cross_node[104]];

straight_node[265] = [cross_node[102], cross_node[104]];
straight_node[266] = [cross_node[102], terminal_node[75]];
straight_node[267] = [cross_node[102], terminal_node[74]];
straight_node[268] = [cross_node[103], cross_node[105]];
straight_node[269] = [cross_node[104], terminal_node[73]];


straight_node[270] = [cross_node[104], terminal_node[75]];
straight_node[271] = [cross_node[105], terminal_node[74]];
straight_node[272] = [cross_node[105], terminal_node[72]];
straight_node[273] = [cross_node[21], terminal_node[16]];
straight_node[274] = [cross_node[27], terminal_node[21]];

straight_node[275] = [cross_node[37], facility_node[2]];
straight_node[276] = [cross_node[59], terminal_node[38]];
straight_node[277] = [cross_node[58], cross_node[59]];
straight_node[278] = [cross_node[77], terminal_node[51]];
straight_node[279] = [cross_node[87], facility_node[9]];


straight_node[280] = [cross_node[86], terminal_node[60]];
straight_node[281] = [cross_node[8], cross_node[106]];
straight_node[282] = [cross_node[106], cross_node[107]];
straight_node[283] = [cross_node[8], cross_node[111]];
straight_node[284] = [cross_node[107], cross_node[111]];

straight_node[285] = [cross_node[107], terminal_node[76]];
straight_node[286] = [cross_node[108], terminal_node[76]];
straight_node[287] = [cross_node[111], cross_node[116]];
straight_node[288] = [cross_node[115], cross_node[116]];
straight_node[289] = [cross_node[115], cross_node[119]];


straight_node[290] = [cross_node[119], cross_node[120]];
straight_node[291] = [cross_node[116], cross_node[120]];
straight_node[292] = [cross_node[9], cross_node[119]];
straight_node[293] = [cross_node[120], terminal_node[77]];
straight_node[294] = [cross_node[121], terminal_node[77]];

straight_node[295] = [cross_node[108], terminal_node[82]];
straight_node[296] = [cross_node[109], terminal_node[82]];
straight_node[297] = [cross_node[109], cross_node[110]];
straight_node[298] = [cross_node[108], terminal_node[83]];
straight_node[299] = [cross_node[112], terminal_node[83]];


straight_node[300] = [cross_node[109], cross_node[112]];
straight_node[301] = [cross_node[112], cross_node[113]];
straight_node[302] = [cross_node[108], cross_node[114]];
straight_node[303] = [cross_node[114], terminal_node[83]];
straight_node[304] = [cross_node[114], terminal_node[84]];

straight_node[305] = [cross_node[117], terminal_node[84]];
straight_node[306] = [cross_node[117], cross_node[118]];
straight_node[307] = [cross_node[112], cross_node[117]];
straight_node[308] = [cross_node[114], cross_node[121]];
straight_node[309] = [cross_node[121], terminal_node[84]];


straight_node[310] = [cross_node[121], terminal_node[85]];
straight_node[311] = [cross_node[122], terminal_node[85]];
straight_node[312] = [cross_node[117], cross_node[122]];
straight_node[313] = [cross_node[122], cross_node[123]];
straight_node[314] = [cross_node[121], cross_node[124]];

straight_node[315] = [cross_node[124], terminal_node[85]];
straight_node[316] = [cross_node[124], terminal_node[86]];
straight_node[317] = [cross_node[125], terminal_node[86]];
straight_node[318] = [cross_node[125], cross_node[126]];
straight_node[319] = [cross_node[122], cross_node[125]];


straight_node[320] = [cross_node[124], cross_node[127]];
straight_node[321] = [cross_node[127], terminal_node[86]];
straight_node[322] = [cross_node[127], terminal_node[87]];
straight_node[323] = [cross_node[128], terminal_node[87]];
straight_node[324] = [cross_node[128], cross_node[129]];

straight_node[325] = [cross_node[125], cross_node[128]];
straight_node[326] = [cross_node[127], cross_node[130]];
straight_node[327] = [cross_node[130], terminal_node[87]];
straight_node[328] = [cross_node[130], terminal_node[88]];
straight_node[329] = [cross_node[132], terminal_node[88]];


straight_node[330] = [cross_node[132], cross_node[133]];
straight_node[331] = [cross_node[128], cross_node[132]];
straight_node[332] = [cross_node[130], cross_node[131]];
straight_node[333] = [cross_node[131], terminal_node[88]];
straight_node[334] = [cross_node[131], cross_node[134]];

straight_node[335] = [cross_node[132], cross_node[135]];
straight_node[336] = [cross_node[134], cross_node[135]];
straight_node[337] = [cross_node[135], cross_node[136]];
straight_node[338] = [cross_node[134], cross_node[137]];
straight_node[339] = [cross_node[137], terminal_node[89]];


straight_node[340] = [cross_node[138], terminal_node[89]];
straight_node[341] = [cross_node[138], cross_node[139]];
straight_node[342] = [cross_node[135], cross_node[138]];
straight_node[343] = [cross_node[137], cross_node[141]];
straight_node[344] = [cross_node[141], terminal_node[89]];

straight_node[345] = [cross_node[38], cross_node[140]];
straight_node[346] = [cross_node[140], terminal_node[79]];
straight_node[347] = [cross_node[141], terminal_node[79]];
straight_node[348] = [cross_node[141], terminal_node[90]];
straight_node[349] = [cross_node[142], terminal_node[90]];


straight_node[350] = [cross_node[142], cross_node[143]];
straight_node[351] = [cross_node[138], cross_node[142]];
straight_node[352] = [cross_node[141], cross_node[144]];
straight_node[353] = [cross_node[144], terminal_node[90]];
straight_node[354] = [cross_node[144], terminal_node[91]];

straight_node[355] = [cross_node[145], terminal_node[91]];
straight_node[356] = [cross_node[145], cross_node[146]];
straight_node[357] = [cross_node[142], cross_node[145]];
straight_node[358] = [cross_node[144], cross_node[147]];
straight_node[359] = [cross_node[147], terminal_node[91]];


straight_node[360] = [cross_node[56], terminal_node[80]];
straight_node[361] = [cross_node[40], terminal_node[80]];
straight_node[362] = [cross_node[147], terminal_node[80]];
straight_node[363] = [cross_node[147], terminal_node[92]];
straight_node[364] = [cross_node[148], terminal_node[92]];

straight_node[365] = [cross_node[148], cross_node[149]];
straight_node[366] = [cross_node[145], cross_node[148]];
straight_node[367] = [cross_node[147], cross_node[150]];
straight_node[368] = [cross_node[150], terminal_node[92]];
straight_node[369] = [cross_node[150], terminal_node[93]];


straight_node[370] = [cross_node[151], terminal_node[93]];
straight_node[371] = [cross_node[151], cross_node[152]];
straight_node[372] = [cross_node[148], cross_node[151]];
straight_node[373] = [cross_node[150], cross_node[153]];
straight_node[374] = [cross_node[153], terminal_node[93]];

straight_node[375] = [cross_node[153], terminal_node[94]];
straight_node[376] = [cross_node[156], terminal_node[94]];
straight_node[377] = [cross_node[156], cross_node[157]];
straight_node[378] = [cross_node[151], cross_node[156]];
straight_node[379] = [cross_node[153], cross_node[155]];


straight_node[380] = [cross_node[154], facility_node[12]];
straight_node[381] = [cross_node[60], cross_node[154]];
straight_node[382] = [cross_node[154], terminal_node[81]];
straight_node[383] = [cross_node[155], terminal_node[81]];
straight_node[384] = [cross_node[155], terminal_node[94]];

straight_node[385] = [cross_node[25], terminal_node[78]];
straight_node[386] = [cross_node[26], terminal_node[78]];
straight_node[387] = [cross_node[127], terminal_node[78]];
straight_node[388] = [cross_node[9], cross_node[25]];
straight_node[389] = [cross_node[106], facility_node[11]];


straight_node[390] = [cross_node[4], facility_node[25]];
straight_node[391] = [terminal_node[2], facility_node[25]];
straight_node[392] = [cross_node[3], facility_node[25]];
straight_node[393] = [cross_node[4], facility_node[63]];
straight_node[394] = [cross_node[3], facility_node[63]];

straight_node[395] = [cross_node[2], facility_node[63]];
straight_node[396] = [cross_node[5], facility_node[63]];
straight_node[397] = [cross_node[6], facility_node[16]];
straight_node[398] = [cross_node[1], facility_node[16]];
straight_node[399] = [cross_node[106], facility_node[16]];


straight_node[400] = [cross_node[7], facility_node[45]];
straight_node[401] = [cross_node[8], facility_node[62]];
straight_node[402] = [cross_node[111], facility_node[62]];
straight_node[403] = [cross_node[115], facility_node[62]];
straight_node[404] = [cross_node[115], facility_node[39]];

straight_node[405] = [cross_node[119], facility_node[39]];
straight_node[406] = [cross_node[114], facility_node[38]];
straight_node[407] = [terminal_node[84], facility_node[38]];
straight_node[408] = [cross_node[121], facility_node[38]];
straight_node[409] = [cross_node[112], facility_node[18]];


straight_node[410] = [cross_node[117], facility_node[18]];
straight_node[411] = [cross_node[117], facility_node[35]];
straight_node[412] = [cross_node[122], facility_node[35]];
straight_node[413] = [cross_node[9], facility_node[49]];
straight_node[414] = [cross_node[10], facility_node[49]];

straight_node[415] = [cross_node[12], facility_node[49]];
straight_node[416] = [cross_node[9], facility_node[31]];
straight_node[417] = [cross_node[10], facility_node[31]];
straight_node[418] = [cross_node[12], facility_node[31]];
straight_node[419] = [cross_node[9], facility_node[66]];


straight_node[420] = [cross_node[10], facility_node[66]];
straight_node[421] = [cross_node[12], facility_node[66]];
straight_node[422] = [cross_node[9], facility_node[65]];
straight_node[423] = [cross_node[10], facility_node[65]];
straight_node[424] = [cross_node[12], facility_node[65]];

straight_node[425] = [cross_node[12], facility_node[64]];
straight_node[426] = [cross_node[13], facility_node[64]];
straight_node[427] = [cross_node[16], facility_node[20]];
straight_node[428] = [cross_node[13], facility_node[20]];
straight_node[429] = [cross_node[15], facility_node[20]];


straight_node[430] = [cross_node[18], facility_node[15]];
straight_node[431] = [cross_node[19], facility_node[15]];
straight_node[432] = [cross_node[16], facility_node[15]];
straight_node[433] = [cross_node[15], facility_node[15]];
straight_node[434] = [cross_node[22], facility_node[23]];

straight_node[435] = [cross_node[23], facility_node[23]];
straight_node[436] = [cross_node[20], facility_node[23]];
straight_node[437] = [cross_node[19], facility_node[23]];
straight_node[438] = [cross_node[22], facility_node[22]];
straight_node[439] = [cross_node[23], facility_node[22]];


straight_node[440] = [cross_node[20], facility_node[22]];
straight_node[441] = [cross_node[19], facility_node[22]];
straight_node[442] = [cross_node[24], facility_node[28]];
straight_node[443] = [cross_node[23], facility_node[28]];
straight_node[444] = [cross_node[22], facility_node[28]];

straight_node[445] = [cross_node[21], facility_node[28]];
straight_node[446] = [cross_node[24], facility_node[44]];
straight_node[447] = [cross_node[23], facility_node[44]];
straight_node[448] = [cross_node[22], facility_node[44]];
straight_node[449] = [cross_node[21], facility_node[44]];


straight_node[450] = [cross_node[124], facility_node[78]];
straight_node[451] = [terminal_node[86], facility_node[78]];
straight_node[452] = [cross_node[127], facility_node[78]];
straight_node[453] = [cross_node[25], facility_node[70]];
straight_node[454] = [terminal_node[78], facility_node[70]];

straight_node[455] = [cross_node[26], facility_node[70]];
straight_node[456] = [cross_node[25], facility_node[47]];
straight_node[457] = [terminal_node[78], facility_node[47]];
straight_node[458] = [cross_node[26], facility_node[47]];
straight_node[459] = [cross_node[127], facility_node[34]];


straight_node[460] = [terminal_node[87], facility_node[34]];
straight_node[461] = [cross_node[130], facility_node[34]];
straight_node[462] = [cross_node[27], facility_node[57]];
straight_node[463] = [cross_node[26], facility_node[57]];
straight_node[464] = [cross_node[28], facility_node[57]];

straight_node[465] = [cross_node[27], facility_node[55]];
straight_node[466] = [cross_node[26], facility_node[55]];
straight_node[467] = [cross_node[28], facility_node[55]];
straight_node[468] = [cross_node[130], facility_node[17]];
straight_node[469] = [cross_node[131], facility_node[17]];


straight_node[470] = [cross_node[131], facility_node[72]];
straight_node[471] = [cross_node[29], facility_node[56]];
straight_node[472] = [cross_node[30], facility_node[56]];
straight_node[473] = [cross_node[29], facility_node[54]];
straight_node[474] = [cross_node[30], facility_node[54]];

straight_node[475] = [cross_node[30], facility_node[71]];
straight_node[476] = [cross_node[30], facility_node[53]];
straight_node[477] = [cross_node[137], facility_node[76]];
straight_node[478] = [terminal_node[89], facility_node[76]];
straight_node[479] = [cross_node[141], facility_node[76]];


straight_node[480] = [cross_node[34], facility_node[58]];
straight_node[481] = [cross_node[140], facility_node[58]];
straight_node[482] = [cross_node[140], facility_node[59]];
straight_node[483] = [cross_node[44], facility_node[30]];
straight_node[484] = [cross_node[42], facility_node[30]];

straight_node[485] = [cross_node[47], facility_node[68]];
straight_node[486] = [cross_node[44], facility_node[68]];
straight_node[487] = [cross_node[47], facility_node[69]];
straight_node[488] = [cross_node[44], facility_node[69]];
straight_node[489] = [cross_node[47], facility_node[33]];


straight_node[490] = [cross_node[44], facility_node[33]];
straight_node[491] = [cross_node[48], facility_node[67]];
straight_node[492] = [cross_node[47], facility_node[67]];
straight_node[493] = [cross_node[48], facility_node[61]];
straight_node[494] = [cross_node[47], facility_node[61]];

straight_node[495] = [cross_node[47], facility_node[27]];
straight_node[496] = [cross_node[50], facility_node[27]];
straight_node[497] = [cross_node[50], facility_node[24]];
straight_node[498] = [cross_node[49], facility_node[24]];
straight_node[499] = [cross_node[54], facility_node[32]];

straight_node[500] = [cross_node[53], facility_node[32]];
straight_node[501] = [cross_node[55], facility_node[32]];
straight_node[502] = [cross_node[40], facility_node[60]];
straight_node[503] = [terminal_node[80], facility_node[60]];
straight_node[504] = [cross_node[56], facility_node[60]];

straight_node[505] = [cross_node[144], facility_node[37]];
straight_node[506] = [terminal_node[91], facility_node[37]];
straight_node[507] = [cross_node[147], facility_node[37]];
straight_node[508] = [cross_node[145], facility_node[40]];
straight_node[509] = [cross_node[148], facility_node[40]];


straight_node[510] = [cross_node[145], facility_node[41]];
straight_node[511] = [cross_node[148], facility_node[41]];
straight_node[512] = [terminal_node[80], facility_node[52]];
straight_node[513] = [cross_node[56], facility_node[52]];
straight_node[514] = [cross_node[147], facility_node[43]];

straight_node[515] = [terminal_node[92], facility_node[43]];
straight_node[516] = [cross_node[150], facility_node[43]];
straight_node[517] = [cross_node[57], facility_node[14]];
straight_node[518] = [cross_node[56], facility_node[14]];
straight_node[519] = [cross_node[58], facility_node[51]];


straight_node[520] = [cross_node[59], facility_node[51]];
straight_node[521] = [cross_node[154], facility_node[21]];
straight_node[522] = [cross_node[153], facility_node[77]];
straight_node[523] = [terminal_node[94], facility_node[77]];
straight_node[524] = [cross_node[155], facility_node[77]];

straight_node[525] = [cross_node[63], facility_node[50]];
straight_node[526] = [cross_node[62], facility_node[50]];
straight_node[527] = [cross_node[64], facility_node[50]];
straight_node[528] = [cross_node[65], facility_node[50]];
straight_node[529] = [cross_node[64], facility_node[26]];


straight_node[530] = [cross_node[65], facility_node[26]];
straight_node[531] = [cross_node[119], facility_node[48]];
straight_node[532] = [cross_node[9], facility_node[48]];
straight_node[533] = [cross_node[9], facility_node[46]];
straight_node[534] = [cross_node[12], facility_node[42]];

straight_node[535] = [cross_node[47], facility_node[29]];
straight_node[536] = [cross_node[50], facility_node[29]];
straight_node[537] = [cross_node[91], terminal_node[63]];
straight_node[538] = [terminal_node[62], terminal_node[63]]; // 직선 539개