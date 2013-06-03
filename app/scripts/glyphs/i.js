'use strict';

angular.module('prototyp0.glyphs')
	.config(function( glyphs, components ) {
		glyphs['i'] = function( dim ) {
			var glyph = [];
			var tmp = [];

			// need an initialization to use forward points

			/*
			glyph[0] = [ 'M', 665, 0 ];
			glyph[1] = [ 'c', 0, 0, -46, 0, -46, 0 ];
			glyph[2] = [ 'c', 0, 0, -48, 0, -48, 0 ];
			glyph[3] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[4] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[5] = [ 'c', 0, 0, 1, 1, 1, 1 ];
			glyph[6] = [ 'c', 0, 0, -79, 209, -79, 209 ];
			glyph[7] = [ 'c', 0, 0, 1, 1, 1, 1 ];
			glyph[8] = [ 'c', 0, 0, -1, 1, -1, 1 ];
			glyph[9] = [ 'c', 0, 0, -1, -1, -1, -1 ];
			glyph[10] = [ 'c', 0, 0, -316, 0, -316, 0 ];
			glyph[11] = [ 'c', 0, 0, -1, 1, -1, 1 ];
			glyph[12] = [ 'c', 0, 0, -1, 1, -1, -1 ];
			glyph[13] = [ 'c', 0, 0, 1, -1, 1, -1 ];
			glyph[14] = [ 'c', 0, 0, -82, -209, -82, -209 ];
			glyph[15] = [ 'c', 0, 0, 1, -1, 1, -1 ];
			glyph[16] = [ 'c', 0, 0, 0, -1, 0, -1 ];
			glyph[17] = [ 'c', 0, 0, 0, -1, 0, -1 ];
			glyph[18] = [ 'c', 0, 0, -46, 0, -46, 0 ];
			glyph[19] = [ 'c', 0, 0, -46, 0, -46, 0 ];
			glyph[20] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[21] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[22] = [ 'c', 0, 0, 1, 1, 1, 1 ];
			glyph[23] = [ 'c', 0, 0, 289, 741, 289, 741 ];
			glyph[24] = [ 'c', 0, 0, -1, 1, -1, 1 ];
			glyph[25] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[26] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[27] = [ 'c', 0, 0, 43, 0, 43, 0 ];
			glyph[28] = [ 'c', 0, 0, 41, 0, 41, 0 ];
			glyph[29] = [ 'c', 0, 0, 290 - dim.s_height * 0.38978494623656, -744 + dim.s_height, 290 - dim.s_height * 0.38978494623656, -744 + dim.s_height ];
			glyph[30] = [ 'c', 0, 0, 1 + dim.s_width, -1, 1 + dim.s_width, -1 ];
			glyph[31] = [ 'c', 0, 0, 0, -1, 0, -1 ];
			glyph[32] = [ 'c', 0, 0, 0, -1, 0, -1 ];

			glyph[33] = [ 'M', 464, 293 ];
			glyph[34] = [ 'c', -1, 1, -1, 1, -1, 1 ];
			glyph[35] = [ 'c', -130, 342, -130, 342, -130, 342 ];
			glyph[36] = [ 'c', 0, 2, 0, 2, 0, 2 ];
			glyph[37] = [ 'c', -1, 0, -1, 0, -1, 0 ];
			glyph[38] = [ 'c', 0, -2, 0, -2, 0, -2 ];
			glyph[39] = [ 'C', 199, 294, 199, 294, 199, 294 ];
			glyph[40] = [ 'c', -1, -1, -1, -1, -1, -1 ];
			glyph[41] = [ 'c', 1, -1, 1, -1, 1, -1 ];
			glyph[42] = [ 'c', 1, 1, 1, 1, 1, 1 ];
			glyph[43] = [ 'c', 262, 0, 262, 0, 262, 0 ];
			glyph[44] = [ 'c', 1, -1, 1, -1, 1, -1 ];
			glyph[45] = [ 'C', 464, 293, 464, 293, 464, 293 ];
			*/

			glyph[0] = [ 'M', 130, 465 ];
			glyph[1] = [ 'C', 130, 465, 130, 3, 130, 3 ];
			glyph[2] = [ 'C', 130, 3, 131, 2, 131, 2 ];
			glyph[3] = [ 'C', 131, 2, 131, 1, 131, 1 ];
			glyph[4] = [ 'C', 131, 1, 131, 0, 131, 0 ];
			glyph[5] = [ 'C', 131, 0, 91, 0, 90, 0 ];
			glyph[6] = [ 'C', 90, 0, 49, 0, 49, 0 ];
			glyph[7] = [ 'C', 49, 0, 49, 1, 49, 1 ];
			glyph[8] = [ 'C', 49, 1, 49, 2, 49, 2 ];
			glyph[9] = [ 'C', 49, 2, 50, 3, 50, 3 ];
			glyph[10] = [ 'C', 50, 3, 50, 462, 50, 462 ];
			glyph[11] = [ 'C', 50, 462, 49, 463, 49, 463 ];
			glyph[12] = [ 'C', 49, 463, 49, 464, 49, 464 ];
			glyph[13] = [ 'C', 49, 464, 49, 465, 49, 465 ];
			glyph[14] = [ 'C', 49, 465, 89, 465, 89, 465 ];
			glyph[15] = [ 'C', 89, 465, 130, 465, 130, 465 ];

			glyph[16] = [ 'M', 90, 652 ];
			glyph[17] = [ 'C', 117, 652, 139, 630, 139, 603 ];
			glyph[18] = [ 'C', 139, 576, 117, 553, 90, 553 ];
			glyph[19] = [ 'C', 63, 553, 42, 576, 42, 603 ];
			glyph[20] = [ 'C', 42, 630, 63, 652, 90, 652 ];

			//

			glyph[0] = [ 'M', glyph[15][5], dim.x_height, glyph[15][5], dim.x_height, glyph[15][5], dim.x_height ];  // duplicate [1] & [2] to avoid bug in components [X-1][5] = null

			components['serif-bottom-right'](dim, glyph, 1);
			components['serif-bottom-left'](dim, glyph, 6);

			components['serif-top-left'](dim, glyph, 10);

			glyph[15] = [ 'C', 89, glyph[0][6] - dim.s_arc * dim.s_height, glyph[0][1], glyph[0][6] - dim.s_arc * dim.s_height, glyph[14][5] + dim.thickness / 2 + 1, glyph[0][6] ];

			components['top-dot'](dim, glyph, 16);

			return glyph;


		};

		/*glyphs['H'] = [
			['M', '347','127'],
			['v', '235'],
			['h', '272'],
			['V', '127'],
			['h', '73'],
			['v', '563'],
			['h', '-73'],
			['V', '426'],
			['H', '347'],
			['v', '264'],
			['h', '-73'],
			['V', '127'],
			['H', '347']
		];*/

		/*

		glyphs['A']

		glyph[0] = [ 'M', 665.6, 0 ];
		glyph[1] = [ 'h', -46.24 ];
		glyph[2] = [ 'h', -48.39 ];
		glyph[3] = [ 'v', 1.08 ];
		glyph[4] = [ 'v', 1.07 ];
		glyph[5] = [ 'l', 1.08, 1.08 ];
		glyph[6] = [ 'c', 0, 0, 0, 0, -79.57, 209.67 ];
		glyph[7] = [ 'c', 0, 0, 0, 0, 1.07, 1.08 ];
		glyph[8] = [ 'c', 0, 0, 0, 0, -1.07, 1.069 ];
		glyph[9] = [ 'c', 0, 0, 0, 0, -1.08, -1.069 ];
		glyph[10] = [ 'c', 0, 0, 0, 0, -316.129, 0 ];
		glyph[11] = [ 'c', 0, 0, 0, 0, -1.07, 1.069 ];
		glyph[12] = [ 'c', 0, 0, 0, 0, -1.08, -1.069 ];
		glyph[13] = [ 'c', 0, 0, 0, 0, 1.08, -1.08 ];
		glyph[14] = [ 'c', 0, 0, 0, 0, -82.801, -209.67 ];
		glyph[15] = [ 'l', 1.08, -1.08 ];
		glyph[16] = [ 'V', 1.08 ];
		glyph[17] = [ 'V', 0 ];
		glyph[18] = [ 'H', 46.24 ];
		glyph[19] = [ 'H', 0 ];
		glyph[20] = [ 'v', 1.08 ];
		glyph[21] = [ 'v', 1.07 ];
		glyph[22] = [ 'l', 1.08, 1.08 ];
		glyph[23] = [ 'l', 289.25, 741.93 ];
		glyph[24] = [ 'l', -1.08, 1.08 ];
		glyph[25] = [ 'v', 1.07 ];
		glyph[26] = [ 'v', 1.08 ];
		glyph[27] = [ 'h', 43.01 ];
		glyph[28] = [ 'h', 41.94 ];
		glyph[29] = [ 'c', 0, 0, 0, 0, 290.319, -745.16 ];
		glyph[30] = [ 'c', 0, 0, 0, 0, 1.08, -1.08 ];
		glyph[31] = [ 'V', 1.08 ];
		glyph[32] = [ 'V', 0 ];

		glyph[33] = [ 'M', 464.52, 293.55 ];
		glyph[34] = [ 'c', -1.08, 1.07, -1.08, 1.07, -1.08, 1.07 ];
		glyph[35] = [ 'c', -130.1, 341.94, -130.1, 341.94, -130.1, 341.94 ];
		glyph[36] = [ 'c', 0, 2.148, 0, 2.148, 0, 2.148 ];
		glyph[37] = [ 'c', -1.08, 0, -1.08, 0, -1.08, 0 ];
		glyph[38] = [ 'c', 0, -2.148, 0, -2.148, 0, -2.148 ];
		glyph[39] = [ 'C', 198.93, 294.62, 198.93, 294.62, 198.93, 294.62 ];
		glyph[40] = [ 'c', -1.08, -1.07, -1.08, -1.07, -1.08, -1.07 ];
		glyph[41] = [ 'c', 1.08, -1.08, 1.08, -1.08, 1.08, -1.08 ];
		glyph[42] = [ 'c', 1.07, 1.08, 1.07, 1.08, 1.07, 1.08 ];
		glyph[43] = [ 'c', 262.37, 0, 262.37, 0, 262.37, 0 ];
		glyph[44] = [ 'c', 1.07, -1.08, 1.07, -1.08, 1.07, -1.08 ];
		glyph[45] = [ 'C', 464.52, 293.55, 464.52, 293.55, 464.52, 293.55 ];


*/


	});




/*

glyph[17] = [ 'M', 90, glyph[0][2] + 187 ]; // 187 is the distance from the barrel to the top of the dot: variable?
glyph[18] = [ 'C', glyph[17][1] + (glyph[17+1][5] - glyph[17][1]) * dim.roundness, glyph[17][2], glyph[18][5], glyph[17+1][6] + (glyph[17][2] - glyph[17+1][6]) * dim.roundness, 139, 603 ]; // 0.55 defines the node/anchor distance: variable?
glyph[19] = [ 'C', glyph[18][5], glyph[18+1][6] + (glyph[18][6] - glyph[18+1][6]) * dim.roundness, glyph[18+1][5] + (glyph[18][5] - glyph[18+1][5]) * dim.roundness, glyph[18+1][6], 90, 553 ];
glyph[20] = [ 'C', glyph[19][5] - (glyph[19][5] - glyph[19+1][5]) * dim.roundness, glyph[19][6], glyph[19+1][5], glyph[19][6] + (glyph[19+1][6] - glyph[19][6]) * dim.roundness, 42, 603 ];
glyph[21] = [ 'C', glyph[20][5], glyph[20][6] + (glyph[17][2] - glyph[20][6]) * dim.roundness, glyph[20][5] + (glyph[17][1] - glyph[20][5]) * dim.roundness, glyph[20+1][6], 90, 652 ];



// sens typo sans retouches :

glyph[0] = [ 'M', 130, 465 ];
glyph[1] = [ 'C', 130, 465, 130, 3, 130, 3 ];
glyph[2] = [ 'C', 130, 3, 131, 2, 131, 2 ];
glyph[3] = [ 'C', 131, 2, 131, 1, 131, 1 ];
glyph[4] = [ 'C', 131, 1, 131, 0, 131, 0 ];
glyph[5] = [ 'C', 131, 0, 91, 0, 91, 0 ];
glyph[6] = [ 'C', 91, 0, 89, 0, 89, 0 ];
glyph[7] = [ 'C', 89, 0, 49, 0, 49, 0 ];
glyph[8] = [ 'C', 49, 0, 49, 1, 49, 1 ];
glyph[9] = [ 'C', 49, 1, 49, 2, 49, 2 ];
glyph[10] = [ 'C', 49, 2, 50, 3, 50, 3 ];
glyph[11] = [ 'C', 50, 3, 50, 462, 50, 462 ];
glyph[12] = [ 'C', 50, 462, 49, 463, 49, 463 ];
glyph[13] = [ 'C', 49, 463, 49, 464, 49, 464 ];
glyph[14] = [ 'C', 49, 464, 49, 465, 49, 465 ];
glyph[15] = [ 'C', 49, 465, 89, 465, 89, 465 ];
glyph[16] = [ 'C', 89, 465, 130, 465, 130, 465 ];

glyph[17] = [ 'M', 90, 652 ];
glyph[18] = [ 'C', 117, 652, 139, 630, 139, 603 ];
glyph[19] = [ 'C', 139, 576, 117, 553, 90, 553 ];
glyph[20] = [ 'C', 63, 553, 42, 576, 42, 603 ];
glyph[21] = [ 'C', 42, 630, 63, 652, 90, 652 ];



///


glyph[0] = ['M', 655, 650 - dim.hauteur];
glyph[1] = ['L', 655, 281];
glyph[2] = ['L', 534 - dim.largeur, 281];
glyph[3] = ['L', 534 - dim.largeur, 308 + dim.hauteur];
glyph[4] = ['L', 534 - dim.largeur, 335 + dim.hauteur];
glyph[5] = ['L', 571, 335 + dim.hauteur];
glyph[6] = ['L', 571, 650 - dim.hauteur];
glyph[7] = ['L', 534 - dim.largeur, 650 - dim.hauteur];
glyph[8] = ['L', 534 - dim.largeur, 675];
glyph[9] = ['L', 534 - dim.largeur, 703];
glyph[10] = ['L', 612, 703];
glyph[11] = ['L', 690 + dim.largeur, 703];
glyph[12] = ['L', 690 + dim.largeur, 675];
glyph[13] = ['L', 690 + dim.largeur, 650 - dim.hauteur];


// i sens SVG

glyph[0] = [ 'M', 542, 274 ];
glyph[1] = [ 'h', -44 ];
glyph[2] = [ 'h', -43 - dim.s_width ];
glyph[3] = [ 'v', 1 ];
glyph[4] = [ 'v', 1 ];
glyph[5] = [ 'l', 1, 1 ];
glyph[6] = [ 'v', 490 ];
glyph[7] = [ 'l', -1, 1 ];
glyph[8] = [ 'v', 1 ];
glyph[9] = [ 'v', 1 ];
glyph[10] = [ 'h', 43 ];
glyph[11] = [ 'h', 2 ];
glyph[12] = [ 'h', 43 ];
glyph[13] = [ 'v', -1 ];
glyph[14] = [ 'v', -1 ];
glyph[15] = [ 'l', -1, -1 ];
glyph[16] = [ 'V', 274 ];

glyph[17] = [ 'M', 553, 128 ];
glyph[18] = [ 'c', 0, 29, -23, 52, -52, 52 ];
glyph[19] = [ 'c', -30, 0, -53, -23, -53, -52 ];
glyph[20] = [ 'c', 0, -29, 23, -53, 53, -53 ];
glyph[21] = [ 'C', 529, 74, 553, 99, 553, 128 ];



////


glyph[0] = [ 'M', 1, 500 ];
glyph[1] = [ 'h', 44 ];
glyph[2] = [ 'h', 43 ];
glyph[3] = [ 'v', -1 ];
glyph[4] = [ 'v', -1 ];
glyph[5] = [ 'l', -1, -1 ];
glyph[6] = [ 'L', 87, 3 ];
glyph[7] = [ 'l', 1, -1 ];
glyph[8] = [ 'V', 1 ];
glyph[9] = [ 'V', 0 ];
glyph[10] = [ 'H', 45 ];
glyph[11] = [ 'h', -2 ];
glyph[12] = [ 'H', 0 ];
glyph[13] = [ 'v', 1 ];
glyph[14] = [ 'v', 1 ];
glyph[15] = [ 'l', 1, 1 ];
glyph[16] = [ 'V', 500 ];

glyph[17] = [ 'M', 44, 701 ];
glyph[18] = [ 'c', 29, 0, 51, -23, 51, -52 ];
glyph[19] = [ 'c', 0, -29, -22, -53, -51, -53 ];
glyph[20] = [ 'c', -29, 0, -52, 24, -52, 53 ];
glyph[21] = [ 'C', -8, 677, 15, 701, 44, 701 ];

*/