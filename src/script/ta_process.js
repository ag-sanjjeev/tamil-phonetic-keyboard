function ta_phonetic_unicode(text) {

	if (!is_not_valid(text)) {

			// tamil numbers

			text = text.replace(/_1000/g, "௲");	
			text = text.replace(/_100/g, "௱");
			text = text.replace(/_10/g, "௰");		
			text = text.replace(/_1/g, "௧");
			text = text.replace(/_2/g, "௨");
			text = text.replace(/_3/g, "௩");
			text = text.replace(/_4/g, "௪");
			text = text.replace(/_5/g, "௫");
			text = text.replace(/_6/g, "௬");
			text = text.replace(/_7/g, "௭");
			text = text.replace(/_8/g, "௮");
			text = text.replace(/_9/g, "௯");		
			

			// tamil vowels

			text = text.replace(/au/g, "\u0B94"); 
			text = text.replace(/ai/g, "\u0B90");
			text = text.replace(/a/g, "\u0B85"); 
			text = text.replace(/A/g, "\u0B86");
			text = text.replace(/aa/g, "\u0B86");
			text = text.replace(/i/g, "\u0B87");
			text = text.replace(/I/g, "\u0B86");
			text = text.replace(/ii/g, "\u0B88");
			text = text.replace(/u/g, "\u0B89");
			text = text.replace(/U/g, "\u0B8A");
			text = text.replace(/uu/g, "\u0B8A");
			text = text.replace(/e/g, "\u0B8E");
			text = text.replace(/E/g, "\u0B8F");
			text = text.replace(/ee/g, "\u0B8F");			
			text = text.replace(/o/g, "\u0B92");
			text = text.replace(/O/g, "\u0B93");
			text = text.replace(/oo/g, "\u0B93");
			text = text.replace(/f/g, "\u0B83");

			// Tamil vowels replacer

			text = text.replace(/\u0B85\u0b85/g, "\u0B86");
			text = text.replace(/\u0B87\u0B87/g, "\u0B88");
			text = text.replace(/\u0B89\u0B89/g, "\u0B8A");
			text = text.replace(/\u0B8E\u0B8E/g, "\u0B8F");
			text = text.replace(/\u0B92\u0B92/g, "\u0B93");


			// Tamil consonents

			// text = text.replace(/zh/g, "\u0BB6\u0BCD");
				text = text.replace(/j/g, "\u0B9C\u0BCD");
				text = text.replace(/C/g, "\u0BB7\u0BCD");
				text = text.replace(/S/g, "\u0BB8\u0BCD");
				text = text.replace(/h/g, "\u0BB9\u0BCD");


				text = text.replace(/k/g, "\u0B95\u0BCD");
				text = text.replace(/g/g, "\u0B95\u0BCD");
				text = text.replace(/ng/g, "\u0B99\u0BCD");
				text = text.replace(/s/g, "\u0B9A\u0BCD");
				text = text.replace(/c/g, "\u0B9A\u0BCD");
				text = text.replace(/nj/g, "\u0B9E\u0BCD");
				text = text.replace(/t/g, "\u0B9F\u0BCD");
				text = text.replace(/d/g, "\u0B9F\u0BCD");
				
				text = text.replace(/N/g, "\u0BA3\u0BCD");
				text = text.replace(/th/g, "\u0BA4\u0BCD");
				text = text.replace(/nth/g, "\u0BA8\u0BCD");
				text = text.replace(/p/g, "\u0BAA\u0BCD");
				text = text.replace(/b/g, "\u0BAA\u0BCD");
				text = text.replace(/m/g, "\u0BAE\u0BCD");
				text = text.replace(/y/g, "\u0BAF\u0BCD");
				text = text.replace(/r/g, "\u0BB0\u0BCD");
				text = text.replace(/l/g, "\u0BB2\u0BCD");
				text = text.replace(/v/g, "\u0BB5\u0BCD");
				text = text.replace(/w/g, "\u0BB5\u0BCD");
				text = text.replace(/z/g, "\u0BB4\u0BCD");
				text = text.replace(/L/g, "\u0BB3\u0BCD");
				text = text.replace(/R/g, "\u0BB1\u0BCD");
				text = text.replace(/n/g, "\u0BA9\u0BCD");

			

			// Tamil consonent replacer
				text = text.replace(/\u0BA9\u0BCD\u0B95\u0BCD/g, "\u0B99\u0BCD"); //for ng
				text = text.replace(/\u0BA9\u0BCD\u0B9C\u0BCD/g, "\u0B9E\u0BCD"); //for nj
				text = text.replace(/\u0B9F\u0BCD\u0BB9\u0BCD/g, "\u0BA4\u0BCD"); //for th
				text = text.replace(/\u0BA9\u0BCD\u0BA4\u0BCD/g, "\u0BA8\u0BCD"); //for nth
					// text = text.replace(/\u0BA9\u0BCD\u0B9F\u0BCD\u0BB9\u0BCD/g, "\u0BA8\u0BCD"); //for nth
				// text = text.replace(/\u0BB4\u0BCD\u0BB9\u0BCD/g, "\u0BB6\u0BCD"); //for zh
				text = text.replace(/\u0B9A\u0BCD\u0BB9\u0BCD/g, "\u0BB8\u0BCD"); //for sh
				text = text.replace(/\u0B9A\u0BCD\u0BB9\u0BCD/g, "\u0BB7\u0BCD"); //for sh

			//Tamil consonental vowels

				//ka and ga series

				text = text.replace(/ka/g, "\u0B95");
				text = text.replace(/kaa/g, "\u0B95\u0BBE");
				text = text.replace(/ki/g, "\u0B95\u0BBF");
				text = text.replace(/kii/g, "\u0B95\u0BC0");
				text = text.replace(/ku/g, "\u0B95\u0BC1");
				text = text.replace(/kuu/g, "\u0B95\u0BC2");
				text = text.replace(/ke/g, "\u0B95\u0BC6");
				text = text.replace(/kee/g, "\u0B95\u0BC7");
				text = text.replace(/kai/g, "\u0B95\u0BC8");
				text = text.replace(/ko/g, "\u0B95\u0BCA");
				text = text.replace(/koo/g, "\u0B95\u0BCB");
				text = text.replace(/kau/g, "\u0B95\u0BCC");

				text = text.replace(/ga/g, "\u0B95");
				text = text.replace(/gaa/g, "\u0B95\u0BBE");
				text = text.replace(/gi/g, "\u0B95\u0BBF");
				text = text.replace(/gii/g, "\u0B95\u0BC0");
				text = text.replace(/gu/g, "\u0B95\u0BC1");
				text = text.replace(/guu/g, "\u0B95\u0BC2");
				text = text.replace(/ge/g, "\u0B95\u0BC6");
				text = text.replace(/gee/g, "\u0B95\u0BC7");
				text = text.replace(/gai/g, "\u0B95\u0BC8");
				text = text.replace(/go/g, "\u0B95\u0BCA");
				text = text.replace(/goo/g, "\u0B95\u0BCB");
				text = text.replace(/gau/g, "\u0B95\u0BCC");

				//ka and ga series replacer
				
				text = text.replace(/\u0B95\u0BCD\u0B85/g, "\u0B95"); //ka or ga
				text = text.replace(/\u0B95\u0BCD\u0B85\u0B85/g, "\u0B95\u0BBE"); //kaa or gaa
				text = text.replace(/\u0B95\u0BCD\u0B86/g, "\u0B95\u0BBE"); //kaa or gaa
				text = text.replace(/\u0B95\u0BCD\u0B87/g, "\u0B95\u0BBF"); //ki or gi
				text = text.replace(/\u0B95\u0BCD\u0B87\u0B87/g, "\u0B95\u0BC0"); //kii or gii
				text = text.replace(/\u0B95\u0BCD\u0B88/g, "\u0B95\u0BC0"); //kii or gii
				text = text.replace(/\u0B95\u0BCD\u0B89/g, "\u0B95\u0BC1"); //ku or gu
				text = text.replace(/\u0B95\u0BCD\u0B89\u0B89/g, "\u0B95\u0BC2"); //kuu or guu
				text = text.replace(/\u0B95\u0BCD\u0B8A/g, "\u0B95\u0BC2"); //kuu or guu
				text = text.replace(/\u0B95\u0BCD\u0B8E/g, "\u0B95\u0BC6"); //ke or ge
				text = text.replace(/\u0B95\u0BCD\u0B8E\u0B8E/g, "\u0B95\u0BC6"); //kee or gee
				text = text.replace(/\u0B95\u0BCD\u0B8F/g, "\u0B95\u0BC7"); //kee or gee
				text = text.replace(/\u0B95\u0BCD\u0B90/g, "\u0B95\u0BC8"); //kai or gai
				text = text.replace(/\u0B95\u0BCD\u0B92/g, "\u0B95\u0BCA"); //ko or go
				text = text.replace(/\u0B95\u0BCD\u0B92\u0B92/g, "\u0B95\u0BCA"); //koo or goo
				text = text.replace(/\u0B95\u0BCD\u0B93/g, "\u0B95\u0BCB"); //koo or goo
				text = text.replace(/\u0B95\u0BCD\u0B94/g, "\u0B95\u0BCC"); //kau or gau



				//nga series

				text = text.replace(/nga/g, "\u0B99");
				text = text.replace(/ngaa/g, "\u0B99\u0BBE");
				text = text.replace(/ngi/g, "\u0B99\u0BBF");
				text = text.replace(/ngii/g, "\u0B99\u0BC0");
				text = text.replace(/ngu/g, "\u0B99\u0BC1");
				text = text.replace(/nguu/g, "\u0B99\u0BC2");
				text = text.replace(/nge/g, "\u0B99\u0BC6");
				text = text.replace(/ngee/g, "\u0B99\u0BC7");
				text = text.replace(/ngai/g, "\u0B99\u0BC8");
				text = text.replace(/ngo/g, "\u0B99\u0BCA");
				text = text.replace(/ngoo/g, "\u0B99\u0BCB");
				text = text.replace(/ngau/g, "\u0B99\u0BCC");

				//nga series replacer
				
				text = text.replace(/\u0B99\u0BCD\u0B85/g, "\u0B99"); //nga
				text = text.replace(/\u0B99\u0BCD\u0B85\u0B85/g, "\u0B99\u0BBE"); //ngaa
				text = text.replace(/\u0B99\u0BCD\u0B86/g, "\u0B99\u0BBE"); //ngaa
				text = text.replace(/\u0B99\u0BCD\u0B87/g, "\u0B99\u0BBF"); //ngi
				text = text.replace(/\u0B99\u0BCD\u0B87\u0B87/g, "\u0B99\u0BC0"); //ngii
				text = text.replace(/\u0B99\u0BCD\u0B88/g, "\u0B99\u0BC0"); //ngii
				text = text.replace(/\u0B99\u0BCD\u0B89/g, "\u0B99\u0BC1"); //ngu
				text = text.replace(/\u0B99\u0BCD\u0B89\u0B89/g, "\u0B99\u0BC2"); //nguu
				text = text.replace(/\u0B99\u0BCD\u0B8A/g, "\u0B99\u0BC2"); //nguu
				text = text.replace(/\u0B99\u0BCD\u0B8E/g, "\u0B99\u0BC6"); //nge
				text = text.replace(/\u0B99\u0BCD\u0B8E\u0B8E/g, "\u0B99\u0BC6"); //ngee
				text = text.replace(/\u0B99\u0BCD\u0B8F/g, "\u0B99\u0BC7"); //ngee
				text = text.replace(/\u0B99\u0BCD\u0B90/g, "\u0B99\u0BC8"); //ngai
				text = text.replace(/\u0B99\u0BCD\u0B92/g, "\u0B99\u0BCA"); //ngo
				text = text.replace(/\u0B99\u0BCD\u0B92\u0B92/g, "\u0B99\u0BCA"); //ngoo
				text = text.replace(/\u0B99\u0BCD\u0B93/g, "\u0B99\u0BCB"); //ngoo
				text = text.replace(/\u0B99\u0BCD\u0B94/g, "\u0B99\u0BCC"); //ngau


				//sa and ca series

				text = text.replace(/sa/g, "\u0B9A");
				text = text.replace(/saa/g, "\u0B9A\u0BBE");
				text = text.replace(/si/g, "\u0B9A\u0BBF");
				text = text.replace(/sii/g, "\u0B9A\u0BC0");
				text = text.replace(/su/g, "\u0B9A\u0BC1");
				text = text.replace(/suu/g, "\u0B9A\u0BC2");
				text = text.replace(/se/g, "\u0B9A\u0BC6");
				text = text.replace(/see/g, "\u0B9A\u0BC7");
				text = text.replace(/sai/g, "\u0B9A\u0BC8");
				text = text.replace(/so/g, "\u0B9A\u0BCA");
				text = text.replace(/soo/g, "\u0B9A\u0BCB");
				text = text.replace(/sau/g, "\u0B9A\u0BCC");

				text = text.replace(/ca/g, "\u0B9A");
				text = text.replace(/caa/g, "\u0B9A\u0BBE");
				text = text.replace(/ci/g, "\u0B9A\u0BBF");
				text = text.replace(/cii/g, "\u0B9A\u0BC0");
				text = text.replace(/cu/g, "\u0B9A\u0BC1");
				text = text.replace(/cuu/g, "\u0B9A\u0BC2");
				text = text.replace(/ce/g, "\u0B9A\u0BC6");
				text = text.replace(/cee/g, "\u0B9A\u0BC7");
				text = text.replace(/cai/g, "\u0B9A\u0BC8");
				text = text.replace(/co/g, "\u0B9A\u0BCA");
				text = text.replace(/coo/g, "\u0B9A\u0BCB");
				text = text.replace(/cau/g, "\u0B9A\u0BCC");

				//sa and ca series replacer
				
				text = text.replace(/\u0B9A\u0BCD\u0B85/g, "\u0B9A"); //sa or ca
				text = text.replace(/\u0B9A\u0BCD\u0B85\u0B85/g, "\u0B9A\u0BBE"); //saa or caa
				text = text.replace(/\u0B9A\u0BCD\u0B86/g, "\u0B9A\u0BBE"); //saa or caa
				text = text.replace(/\u0B9A\u0BCD\u0B87/g, "\u0B9A\u0BBF"); //si or ci
				text = text.replace(/\u0B9A\u0BCD\u0B87\u0B87/g, "\u0B9A\u0BC0"); //sii or cii
				text = text.replace(/\u0B9A\u0BCD\u0B88/g, "\u0B9A\u0BC0"); //sii or cii
				text = text.replace(/\u0B9A\u0BCD\u0B89/g, "\u0B9A\u0BC1"); //su or cu
				text = text.replace(/\u0B9A\u0BCD\u0B89\u0B89/g, "\u0B9A\u0BC2"); //suu or cuu
				text = text.replace(/\u0B9A\u0BCD\u0B8A/g, "\u0B9A\u0BC2"); //suu or cuu
				text = text.replace(/\u0B9A\u0BCD\u0B8E/g, "\u0B9A\u0BC6"); //se or ce
				text = text.replace(/\u0B9A\u0BCD\u0B8E\u0B8E/g, "\u0B9A\u0BC6"); //see or cee
				text = text.replace(/\u0B9A\u0BCD\u0B8F/g, "\u0B9A\u0BC7"); //see or cee
				text = text.replace(/\u0B9A\u0BCD\u0B90/g, "\u0B9A\u0BC8"); //sai or cai
				text = text.replace(/\u0B9A\u0BCD\u0B92/g, "\u0B9A\u0BCA"); //so or co
				text = text.replace(/\u0B9A\u0BCD\u0B92\u0B92/g, "\u0B9A\u0BCA"); //soo or coo
				text = text.replace(/\u0B9A\u0BCD\u0B93/g, "\u0B9A\u0BCB"); //soo or coo
				text = text.replace(/\u0B9A\u0BCD\u0B94/g, "\u0B9A\u0BCC"); //sau or cau


				//nja series

				text = text.replace(/nja/g, "\u0B9E");
				text = text.replace(/njaa/g, "\u0B9E\u0BBE");
				text = text.replace(/nji/g, "\u0B9E\u0BBF");
				text = text.replace(/njii/g, "\u0B9E\u0BC0");
				text = text.replace(/nju/g, "\u0B9E\u0BC1");
				text = text.replace(/njuu/g, "\u0B9E\u0BC2");
				text = text.replace(/nje/g, "\u0B9E\u0BC6");
				text = text.replace(/njee/g, "\u0B9E\u0BC7");
				text = text.replace(/njai/g, "\u0B9E\u0BC8");
				text = text.replace(/njo/g, "\u0B9E\u0BCA");
				text = text.replace(/njoo/g, "\u0B9E\u0BCB");
				text = text.replace(/njau/g, "\u0B9E\u0BCC");

				//nja series replacer
				
				text = text.replace(/\u0B9E\u0BCD\u0B85/g, "\u0B9E"); //nja
				text = text.replace(/\u0B9E\u0BCD\u0B85\u0B85/g, "\u0B9E\u0BBE"); //njaa
				text = text.replace(/\u0B9E\u0BCD\u0B86/g, "\u0B9E\u0BBE"); //njaa
				text = text.replace(/\u0B9E\u0BCD\u0B87/g, "\u0B9E\u0BBF"); //nji
				text = text.replace(/\u0B9E\u0BCD\u0B87\u0B87/g, "\u0B9E\u0BC0"); //njii
				text = text.replace(/\u0B9E\u0BCD\u0B88/g, "\u0B9E\u0BC0"); //njii
				text = text.replace(/\u0B9E\u0BCD\u0B89/g, "\u0B9E\u0BC1"); //nju
				text = text.replace(/\u0B9E\u0BCD\u0B89\u0B89/g, "\u0B9E\u0BC2"); //njuu
				text = text.replace(/\u0B9E\u0BCD\u0B8A/g, "\u0B9E\u0BC2"); //njuu
				text = text.replace(/\u0B9E\u0BCD\u0B8E/g, "\u0B9E\u0BC6"); //nje
				text = text.replace(/\u0B9E\u0BCD\u0B8E\u0B8E/g, "\u0B9E\u0BC6"); //njee
				text = text.replace(/\u0B9E\u0BCD\u0B8F/g, "\u0B9E\u0BC7"); //njee
				text = text.replace(/\u0B9E\u0BCD\u0B90/g, "\u0B9E\u0BC8"); //njai
				text = text.replace(/\u0B9E\u0BCD\u0B92/g, "\u0B9E\u0BCA"); //njo
				text = text.replace(/\u0B9E\u0BCD\u0B92\u0B92/g, "\u0B9E\u0BCA"); //njoo
				text = text.replace(/\u0B9E\u0BCD\u0B93/g, "\u0B9E\u0BCB"); //njoo
				text = text.replace(/\u0B9E\u0BCD\u0B94/g, "\u0B9E\u0BCC"); //njau


				//ta and da series

				text = text.replace(/ta/g, "\u0B9F");
				text = text.replace(/taa/g, "\u0B9F\u0BBE");
				text = text.replace(/ti/g, "\u0B9F\u0BBF");
				text = text.replace(/tii/g, "\u0B9F\u0BC0");
				text = text.replace(/tu/g, "\u0B9F\u0BC1");
				text = text.replace(/tuu/g, "\u0B9F\u0BC2");
				text = text.replace(/te/g, "\u0B9F\u0BC6");
				text = text.replace(/tee/g, "\u0B9F\u0BC7");
				text = text.replace(/tai/g, "\u0B9F\u0BC8");
				text = text.replace(/to/g, "\u0B9F\u0BCA");
				text = text.replace(/too/g, "\u0B9F\u0BCB");
				text = text.replace(/tau/g, "\u0B9F\u0BCC");

				text = text.replace(/ca/g, "\u0B9F");
				text = text.replace(/caa/g, "\u0B9F\u0BBE");
				text = text.replace(/ci/g, "\u0B9F\u0BBF");
				text = text.replace(/cii/g, "\u0B9F\u0BC0");
				text = text.replace(/cu/g, "\u0B9F\u0BC1");
				text = text.replace(/cuu/g, "\u0B9F\u0BC2");
				text = text.replace(/ce/g, "\u0B9F\u0BC6");
				text = text.replace(/cee/g, "\u0B9F\u0BC7");
				text = text.replace(/cai/g, "\u0B9F\u0BC8");
				text = text.replace(/co/g, "\u0B9F\u0BCA");
				text = text.replace(/coo/g, "\u0B9F\u0BCB");
				text = text.replace(/cau/g, "\u0B9F\u0BCC");

				//ta and da series replacer
				
				text = text.replace(/\u0B9F\u0BCD\u0B85/g, "\u0B9F"); //ta or da
				text = text.replace(/\u0B9F\u0BCD\u0B85\u0B85/g, "\u0B9F\u0BBE"); //taa or daa
				text = text.replace(/\u0B9F\u0BCD\u0B86/g, "\u0B9F\u0BBE"); //taa or daa
				text = text.replace(/\u0B9F\u0BCD\u0B87/g, "\u0B9F\u0BBF"); //ti or di
				text = text.replace(/\u0B9F\u0BCD\u0B87\u0B87/g, "\u0B9F\u0BC0"); //tii or dii
				text = text.replace(/\u0B9F\u0BCD\u0B88/g, "\u0B9F\u0BC0"); //tii or dii
				text = text.replace(/\u0B9F\u0BCD\u0B89/g, "\u0B9F\u0BC1"); //tu or du
				text = text.replace(/\u0B9F\u0BCD\u0B89\u0B89/g, "\u0B9F\u0BC2"); //tuu or duu
				text = text.replace(/\u0B9F\u0BCD\u0B8A/g, "\u0B9F\u0BC2"); //tuu or duu
				text = text.replace(/\u0B9F\u0BCD\u0B8E/g, "\u0B9F\u0BC6"); //te or de
				text = text.replace(/\u0B9F\u0BCD\u0B8E\u0B8E/g, "\u0B9F\u0BC6"); //tee or dee
				text = text.replace(/\u0B9F\u0BCD\u0B8F/g, "\u0B9F\u0BC7"); //tee or dee
				text = text.replace(/\u0B9F\u0BCD\u0B90/g, "\u0B9F\u0BC8"); //tai or dai
				text = text.replace(/\u0B9F\u0BCD\u0B92/g, "\u0B9F\u0BCA"); //to or do
				text = text.replace(/\u0B9F\u0BCD\u0B92\u0B92/g, "\u0B9F\u0BCA"); //too or doo
				text = text.replace(/\u0B9F\u0BCD\u0B93/g, "\u0B9F\u0BCB"); //too or doo
				text = text.replace(/\u0B9F\u0BCD\u0B94/g, "\u0B9F\u0BCC"); //tau or dau


				//Na series

				text = text.replace(/Na/g, "\u0BA3");
				text = text.replace(/Naa/g, "\u0BA3\u0BBE");
				text = text.replace(/Ni/g, "\u0BA3\u0BBF");
				text = text.replace(/Nii/g, "\u0BA3\u0BC0");
				text = text.replace(/Nu/g, "\u0BA3\u0BC1");
				text = text.replace(/Nuu/g, "\u0BA3\u0BC2");
				text = text.replace(/Ne/g, "\u0BA3\u0BC6");
				text = text.replace(/Nee/g, "\u0BA3\u0BC7");
				text = text.replace(/Nai/g, "\u0BA3\u0BC8");
				text = text.replace(/No/g, "\u0BA3\u0BCA");
				text = text.replace(/Noo/g, "\u0BA3\u0BCB");
				text = text.replace(/Nau/g, "\u0BA3\u0BCC");

				//Na series replacer
				
				text = text.replace(/\u0BA3\u0BCD\u0B85/g, "\u0BA3"); //Na
				text = text.replace(/\u0BA3\u0BCD\u0B85\u0B85/g, "\u0BA3\u0BBE"); //Naa
				text = text.replace(/\u0BA3\u0BCD\u0B86/g, "\u0BA3\u0BBE"); //Naa
				text = text.replace(/\u0BA3\u0BCD\u0B87/g, "\u0BA3\u0BBF"); //Ni
				text = text.replace(/\u0BA3\u0BCD\u0B87\u0B87/g, "\u0BA3\u0BC0"); //Nii
				text = text.replace(/\u0BA3\u0BCD\u0B88/g, "\u0BA3\u0BC0"); //Nii
				text = text.replace(/\u0BA3\u0BCD\u0B89/g, "\u0BA3\u0BC1"); //Nu
				text = text.replace(/\u0BA3\u0BCD\u0B89\u0B89/g, "\u0BA3\u0BC2"); //Nuu
				text = text.replace(/\u0BA3\u0BCD\u0B8A/g, "\u0BA3\u0BC2"); //Nuu
				text = text.replace(/\u0BA3\u0BCD\u0B8E/g, "\u0BA3\u0BC6"); //Ne
				text = text.replace(/\u0BA3\u0BCD\u0B8E\u0B8E/g, "\u0BA3\u0BC6"); //Nee
				text = text.replace(/\u0BA3\u0BCD\u0B8F/g, "\u0BA3\u0BC7"); //Nee
				text = text.replace(/\u0BA3\u0BCD\u0B90/g, "\u0BA3\u0BC8"); //Nai
				text = text.replace(/\u0BA3\u0BCD\u0B92/g, "\u0BA3\u0BCA"); //No
				text = text.replace(/\u0BA3\u0BCD\u0B92\u0B92/g, "\u0BA3\u0BCA"); //Noo
				text = text.replace(/\u0BA3\u0BCD\u0B93/g, "\u0BA3\u0BCB"); //Noo
				text = text.replace(/\u0BA3\u0BCD\u0B94/g, "\u0BA3\u0BCC"); //Nau


				//tha series

				text = text.replace(/tha/g, "\u0BA4");
				text = text.replace(/thaa/g, "\u0BA4\u0BBE");
				text = text.replace(/thi/g, "\u0BA4\u0BBF");
				text = text.replace(/thii/g, "\u0BA4\u0BC0");
				text = text.replace(/thu/g, "\u0BA4\u0BC1");
				text = text.replace(/thuu/g, "\u0BA4\u0BC2");
				text = text.replace(/the/g, "\u0BA4\u0BC6");
				text = text.replace(/thee/g, "\u0BA4\u0BC7");
				text = text.replace(/thai/g, "\u0BA4\u0BC8");
				text = text.replace(/tho/g, "\u0BA4\u0BCA");
				text = text.replace(/thoo/g, "\u0BA4\u0BCB");
				text = text.replace(/thau/g, "\u0BA4\u0BCC");

				//tha series replacer
				
				text = text.replace(/\u0BA4\u0BCD\u0B85/g, "\u0BA4"); //tha
				text = text.replace(/\u0BA4\u0BCD\u0B85\u0B85/g, "\u0BA4\u0BBE"); //thaa
				text = text.replace(/\u0BA4\u0BCD\u0B86/g, "\u0BA4\u0BBE"); //thaa
				text = text.replace(/\u0BA4\u0BCD\u0B87/g, "\u0BA4\u0BBF"); //thi
				text = text.replace(/\u0BA4\u0BCD\u0B87\u0B87/g, "\u0BA4\u0BC0"); //thii
				text = text.replace(/\u0BA4\u0BCD\u0B88/g, "\u0BA4\u0BC0"); //thii
				text = text.replace(/\u0BA4\u0BCD\u0B89/g, "\u0BA4\u0BC1"); //thu
				text = text.replace(/\u0BA4\u0BCD\u0B89\u0B89/g, "\u0BA4\u0BC2"); //thuu
				text = text.replace(/\u0BA4\u0BCD\u0B8A/g, "\u0BA4\u0BC2"); //thuu
				text = text.replace(/\u0BA4\u0BCD\u0B8E/g, "\u0BA4\u0BC6"); //the
				text = text.replace(/\u0BA4\u0BCD\u0B8E\u0B8E/g, "\u0BA4\u0BC6"); //thee
				text = text.replace(/\u0BA4\u0BCD\u0B8F/g, "\u0BA4\u0BC7"); //thee
				text = text.replace(/\u0BA4\u0BCD\u0B90/g, "\u0BA4\u0BC8"); //thai
				text = text.replace(/\u0BA4\u0BCD\u0B92/g, "\u0BA4\u0BCA"); //tho
				text = text.replace(/\u0BA4\u0BCD\u0B92\u0B92/g, "\u0BA4\u0BCA"); //thoo
				text = text.replace(/\u0BA4\u0BCD\u0B93/g, "\u0BA4\u0BCB"); //thoo
				text = text.replace(/\u0BA4\u0BCD\u0B94/g, "\u0BA4\u0BCC"); //thau



				//ntha series

				text = text.replace(/ntha/g, "\u0BA8");
				text = text.replace(/nthaa/g, "\u0BA8\u0BBE");
				text = text.replace(/nthi/g, "\u0BA8\u0BBF");
				text = text.replace(/nthii/g, "\u0BA8\u0BC0");
				text = text.replace(/nthu/g, "\u0BA8\u0BC1");
				text = text.replace(/nthuu/g, "\u0BA8\u0BC2");
				text = text.replace(/nthe/g, "\u0BA8\u0BC6");
				text = text.replace(/nthee/g, "\u0BA8\u0BC7");
				text = text.replace(/nthai/g, "\u0BA8\u0BC8");
				text = text.replace(/ntho/g, "\u0BA8\u0BCA");
				text = text.replace(/nthoo/g, "\u0BA8\u0BCB");
				text = text.replace(/nthau/g, "\u0BA8\u0BCC");

				//ntha series replacer
				
				text = text.replace(/\u0BA8\u0BCD\u0B85/g, "\u0BA8"); //ntha
				text = text.replace(/\u0BA8\u0BCD\u0B85\u0B85/g, "\u0BA8\u0BBE"); //nthaa
				text = text.replace(/\u0BA8\u0BCD\u0B86/g, "\u0BA8\u0BBE"); //nthaa
				text = text.replace(/\u0BA8\u0BCD\u0B87/g, "\u0BA8\u0BBF"); //nthi
				text = text.replace(/\u0BA8\u0BCD\u0B87\u0B87/g, "\u0BA8\u0BC0"); //nthii
				text = text.replace(/\u0BA8\u0BCD\u0B88/g, "\u0BA8\u0BC0"); //nthii
				text = text.replace(/\u0BA8\u0BCD\u0B89/g, "\u0BA8\u0BC1"); //nthu
				text = text.replace(/\u0BA8\u0BCD\u0B89\u0B89/g, "\u0BA8\u0BC2"); //nthuu
				text = text.replace(/\u0BA8\u0BCD\u0B8A/g, "\u0BA8\u0BC2"); //nthuu
				text = text.replace(/\u0BA8\u0BCD\u0B8E/g, "\u0BA8\u0BC6"); //nthe
				text = text.replace(/\u0BA8\u0BCD\u0B8E\u0B8E/g, "\u0BA8\u0BC6"); //nthee
				text = text.replace(/\u0BA8\u0BCD\u0B8F/g, "\u0BA8\u0BC7"); //nthee
				text = text.replace(/\u0BA8\u0BCD\u0B90/g, "\u0BA8\u0BC8"); //nthai
				text = text.replace(/\u0BA8\u0BCD\u0B92/g, "\u0BA8\u0BCA"); //ntho
				text = text.replace(/\u0BA8\u0BCD\u0B92\u0B92/g, "\u0BA8\u0BCA"); //nthoo
				text = text.replace(/\u0BA8\u0BCD\u0B93/g, "\u0BA8\u0BCB"); //nthoo
				text = text.replace(/\u0BA8\u0BCD\u0B94/g, "\u0BA8\u0BCC"); //nthau


				//pa and ba series

				text = text.replace(/pa/g, "\u0BAA");
				text = text.replace(/paa/g, "\u0BAA\u0BBE");
				text = text.replace(/pi/g, "\u0BAA\u0BBF");
				text = text.replace(/pii/g, "\u0BAA\u0BC0");
				text = text.replace(/pu/g, "\u0BAA\u0BC1");
				text = text.replace(/puu/g, "\u0BAA\u0BC2");
				text = text.replace(/pe/g, "\u0BAA\u0BC6");
				text = text.replace(/pee/g, "\u0BAA\u0BC7");
				text = text.replace(/pai/g, "\u0BAA\u0BC8");
				text = text.replace(/po/g, "\u0BAA\u0BCA");
				text = text.replace(/poo/g, "\u0BAA\u0BCB");
				text = text.replace(/pau/g, "\u0BAA\u0BCC");
								

				//pa and ba series replacer
				
				text = text.replace(/\u0BAA\u0BCD\u0B85/g, "\u0BAA"); //pa or ba
				text = text.replace(/\u0BAA\u0BCD\u0B85\u0B85/g, "\u0BAA\u0BBE"); //paa or baa
				text = text.replace(/\u0BAA\u0BCD\u0B86/g, "\u0BAA\u0BBE"); //paa or baa
				text = text.replace(/\u0BAA\u0BCD\u0B87/g, "\u0BAA\u0BBF"); //pi or bi
				text = text.replace(/\u0BAA\u0BCD\u0B87\u0B87/g, "\u0BAA\u0BC0"); //pii or bii
				text = text.replace(/\u0BAA\u0BCD\u0B88/g, "\u0BAA\u0BC0"); //pii or bii
				text = text.replace(/\u0BAA\u0BCD\u0B89/g, "\u0BAA\u0BC1"); //pu or bu
				text = text.replace(/\u0BAA\u0BCD\u0B89\u0B89/g, "\u0BAA\u0BC2"); //puu or buu
				text = text.replace(/\u0BAA\u0BCD\u0B8A/g, "\u0BAA\u0BC2"); //puu or buu
				text = text.replace(/\u0BAA\u0BCD\u0B8E/g, "\u0BAA\u0BC6"); //pe or be
				text = text.replace(/\u0BAA\u0BCD\u0B8E\u0B8E/g, "\u0BAA\u0BC6"); //pee or bee
				text = text.replace(/\u0BAA\u0BCD\u0B8F/g, "\u0BAA\u0BC7"); //pee or bee
				text = text.replace(/\u0BAA\u0BCD\u0B90/g, "\u0BAA\u0BC8"); //pai or bai
				text = text.replace(/\u0BAA\u0BCD\u0B92/g, "\u0BAA\u0BCA"); //po or bo
				text = text.replace(/\u0BAA\u0BCD\u0B92\u0B92/g, "\u0BAA\u0BCA"); //poo or boo
				text = text.replace(/\u0BAA\u0BCD\u0B93/g, "\u0BAA\u0BCB"); //poo or boo
				text = text.replace(/\u0BAA\u0BCD\u0B94/g, "\u0BAA\u0BCC"); //pau or bau


				//ma series

				text = text.replace(/ma/g, "\u0BAE");
				text = text.replace(/maa/g, "\u0BAE\u0BBE");
				text = text.replace(/mi/g, "\u0BAE\u0BBF");
				text = text.replace(/mii/g, "\u0BAE\u0BC0");
				text = text.replace(/mu/g, "\u0BAE\u0BC1");
				text = text.replace(/muu/g, "\u0BAE\u0BC2");
				text = text.replace(/me/g, "\u0BAE\u0BC6");
				text = text.replace(/mee/g, "\u0BAE\u0BC7");
				text = text.replace(/mai/g, "\u0BAE\u0BC8");
				text = text.replace(/mo/g, "\u0BAE\u0BCA");
				text = text.replace(/moo/g, "\u0BAE\u0BCB");
				text = text.replace(/mau/g, "\u0BAE\u0BCC");

				//ma series replacer
				
				text = text.replace(/\u0BAE\u0BCD\u0B85/g, "\u0BAE"); //ma
				text = text.replace(/\u0BAE\u0BCD\u0B85\u0B85/g, "\u0BAE\u0BBE"); //maa
				text = text.replace(/\u0BAE\u0BCD\u0B86/g, "\u0BAE\u0BBE"); //maa
				text = text.replace(/\u0BAE\u0BCD\u0B87/g, "\u0BAE\u0BBF"); //mi
				text = text.replace(/\u0BAE\u0BCD\u0B87\u0B87/g, "\u0BAE\u0BC0"); //mii
				text = text.replace(/\u0BAE\u0BCD\u0B88/g, "\u0BAE\u0BC0"); //mii
				text = text.replace(/\u0BAE\u0BCD\u0B89/g, "\u0BAE\u0BC1"); //mu
				text = text.replace(/\u0BAE\u0BCD\u0B89\u0B89/g, "\u0BAE\u0BC2"); //muu
				text = text.replace(/\u0BAE\u0BCD\u0B8A/g, "\u0BAE\u0BC2"); //muu
				text = text.replace(/\u0BAE\u0BCD\u0B8E/g, "\u0BAE\u0BC6"); //me
				text = text.replace(/\u0BAE\u0BCD\u0B8E\u0B8E/g, "\u0BAE\u0BC6"); //mee
				text = text.replace(/\u0BAE\u0BCD\u0B8F/g, "\u0BAE\u0BC7"); //mee
				text = text.replace(/\u0BAE\u0BCD\u0B90/g, "\u0BAE\u0BC8"); //mai
				text = text.replace(/\u0BAE\u0BCD\u0B92/g, "\u0BAE\u0BCA"); //mo
				text = text.replace(/\u0BAE\u0BCD\u0B92\u0B92/g, "\u0BAE\u0BCA"); //moo
				text = text.replace(/\u0BAE\u0BCD\u0B93/g, "\u0BAE\u0BCB"); //moo
				text = text.replace(/\u0BAE\u0BCD\u0B94/g, "\u0BAE\u0BCC"); //mau


				//ya series

				text = text.replace(/ya/g, "\u0BAF");
				text = text.replace(/yaa/g, "\u0BAF\u0BBE");
				text = text.replace(/yi/g, "\u0BAF\u0BBF");
				text = text.replace(/yii/g, "\u0BAF\u0BC0");
				text = text.replace(/yu/g, "\u0BAF\u0BC1");
				text = text.replace(/yuu/g, "\u0BAF\u0BC2");
				text = text.replace(/ye/g, "\u0BAF\u0BC6");
				text = text.replace(/yee/g, "\u0BAF\u0BC7");
				text = text.replace(/yai/g, "\u0BAF\u0BC8");
				text = text.replace(/yo/g, "\u0BAF\u0BCA");
				text = text.replace(/yoo/g, "\u0BAF\u0BCB");
				text = text.replace(/yau/g, "\u0BAF\u0BCC");

				//ya series replacer
				
				text = text.replace(/\u0BAF\u0BCD\u0B85/g, "\u0BAF"); //ya
				text = text.replace(/\u0BAF\u0BCD\u0B85\u0B85/g, "\u0BAF\u0BBE"); //yaa
				text = text.replace(/\u0BAF\u0BCD\u0B86/g, "\u0BAF\u0BBE"); //yaa
				text = text.replace(/\u0BAF\u0BCD\u0B87/g, "\u0BAF\u0BBF"); //yi
				text = text.replace(/\u0BAF\u0BCD\u0B87\u0B87/g, "\u0BAF\u0BC0"); //yii
				text = text.replace(/\u0BAF\u0BCD\u0B88/g, "\u0BAF\u0BC0"); //yii
				text = text.replace(/\u0BAF\u0BCD\u0B89/g, "\u0BAF\u0BC1"); //yu
				text = text.replace(/\u0BAF\u0BCD\u0B89\u0B89/g, "\u0BAF\u0BC2"); //yuu
				text = text.replace(/\u0BAF\u0BCD\u0B8A/g, "\u0BAF\u0BC2"); //yuu
				text = text.replace(/\u0BAF\u0BCD\u0B8E/g, "\u0BAF\u0BC6"); //ye
				text = text.replace(/\u0BAF\u0BCD\u0B8E\u0B8E/g, "\u0BAF\u0BC6"); //yee
				text = text.replace(/\u0BAF\u0BCD\u0B8F/g, "\u0BAF\u0BC7"); //yee
				text = text.replace(/\u0BAF\u0BCD\u0B90/g, "\u0BAF\u0BC8"); //yai
				text = text.replace(/\u0BAF\u0BCD\u0B92/g, "\u0BAF\u0BCA"); //yo
				text = text.replace(/\u0BAF\u0BCD\u0B92\u0B92/g, "\u0BAF\u0BCA"); //yoo
				text = text.replace(/\u0BAF\u0BCD\u0B93/g, "\u0BAF\u0BCB"); //yoo
				text = text.replace(/\u0BAF\u0BCD\u0B94/g, "\u0BAF\u0BCC"); //yau


				//ra series

				text = text.replace(/ra/g, "\u0BB0");
				text = text.replace(/raa/g, "\u0BB0\u0BBE");
				text = text.replace(/ri/g, "\u0BB0\u0BBF");
				text = text.replace(/rii/g, "\u0BB0\u0BC0");
				text = text.replace(/ru/g, "\u0BB0\u0BC1");
				text = text.replace(/ruu/g, "\u0BB0\u0BC2");
				text = text.replace(/re/g, "\u0BB0\u0BC6");
				text = text.replace(/ree/g, "\u0BB0\u0BC7");
				text = text.replace(/rai/g, "\u0BB0\u0BC8");
				text = text.replace(/ro/g, "\u0BB0\u0BCA");
				text = text.replace(/roo/g, "\u0BB0\u0BCB");
				text = text.replace(/rau/g, "\u0BB0\u0BCC");

				//ra series replacer
				
				text = text.replace(/\u0BB0\u0BCD\u0B85/g, "\u0BB0"); //ra
				text = text.replace(/\u0BB0\u0BCD\u0B85\u0B85/g, "\u0BB0\u0BBE"); //raa
				text = text.replace(/\u0BB0\u0BCD\u0B86/g, "\u0BB0\u0BBE"); //raa
				text = text.replace(/\u0BB0\u0BCD\u0B87/g, "\u0BB0\u0BBF"); //ri
				text = text.replace(/\u0BB0\u0BCD\u0B87\u0B87/g, "\u0BB0\u0BC0"); //rii
				text = text.replace(/\u0BB0\u0BCD\u0B88/g, "\u0BB0\u0BC0"); //rii
				text = text.replace(/\u0BB0\u0BCD\u0B89/g, "\u0BB0\u0BC1"); //ru
				text = text.replace(/\u0BB0\u0BCD\u0B89\u0B89/g, "\u0BB0\u0BC2"); //ruu
				text = text.replace(/\u0BB0\u0BCD\u0B8A/g, "\u0BB0\u0BC2"); //ruu
				text = text.replace(/\u0BB0\u0BCD\u0B8E/g, "\u0BB0\u0BC6"); //re
				text = text.replace(/\u0BB0\u0BCD\u0B8E\u0B8E/g, "\u0BB0\u0BC6"); //ree
				text = text.replace(/\u0BB0\u0BCD\u0B8F/g, "\u0BB0\u0BC7"); //ree
				text = text.replace(/\u0BB0\u0BCD\u0B90/g, "\u0BB0\u0BC8"); //rai
				text = text.replace(/\u0BB0\u0BCD\u0B92/g, "\u0BB0\u0BCA"); //ro
				text = text.replace(/\u0BB0\u0BCD\u0B92\u0B92/g, "\u0BB0\u0BCA"); //roo
				text = text.replace(/\u0BB0\u0BCD\u0B93/g, "\u0BB0\u0BCB"); //roo
				text = text.replace(/\u0BB0\u0BCD\u0B94/g, "\u0BB0\u0BCC"); //rau


				//la series

				text = text.replace(/la/g, "\u0BB2");
				text = text.replace(/laa/g, "\u0BB2\u0BBE");
				text = text.replace(/li/g, "\u0BB2\u0BBF");
				text = text.replace(/lii/g, "\u0BB2\u0BC0");
				text = text.replace(/lu/g, "\u0BB2\u0BC1");
				text = text.replace(/luu/g, "\u0BB2\u0BC2");
				text = text.replace(/le/g, "\u0BB2\u0BC6");
				text = text.replace(/lee/g, "\u0BB2\u0BC7");
				text = text.replace(/lai/g, "\u0BB2\u0BC8");
				text = text.replace(/lo/g, "\u0BB2\u0BCA");
				text = text.replace(/loo/g, "\u0BB2\u0BCB");
				text = text.replace(/lau/g, "\u0BB2\u0BCC");

				//la series replacer
				
				text = text.replace(/\u0BB2\u0BCD\u0B85/g, "\u0BB2"); //la
				text = text.replace(/\u0BB2\u0BCD\u0B85\u0B85/g, "\u0BB2\u0BBE"); //laa
				text = text.replace(/\u0BB2\u0BCD\u0B86/g, "\u0BB2\u0BBE"); //laa
				text = text.replace(/\u0BB2\u0BCD\u0B87/g, "\u0BB2\u0BBF"); //li
				text = text.replace(/\u0BB2\u0BCD\u0B87\u0B87/g, "\u0BB2\u0BC0"); //lii
				text = text.replace(/\u0BB2\u0BCD\u0B88/g, "\u0BB2\u0BC0"); //lii
				text = text.replace(/\u0BB2\u0BCD\u0B89/g, "\u0BB2\u0BC1"); //lu
				text = text.replace(/\u0BB2\u0BCD\u0B89\u0B89/g, "\u0BB2\u0BC2"); //luu
				text = text.replace(/\u0BB2\u0BCD\u0B8A/g, "\u0BB2\u0BC2"); //luu
				text = text.replace(/\u0BB2\u0BCD\u0B8E/g, "\u0BB2\u0BC6"); //le
				text = text.replace(/\u0BB2\u0BCD\u0B8E\u0B8E/g, "\u0BB2\u0BC6"); //lee
				text = text.replace(/\u0BB2\u0BCD\u0B8F/g, "\u0BB2\u0BC7"); //lee
				text = text.replace(/\u0BB2\u0BCD\u0B90/g, "\u0BB2\u0BC8"); //lai
				text = text.replace(/\u0BB2\u0BCD\u0B92/g, "\u0BB2\u0BCA"); //lo
				text = text.replace(/\u0BB2\u0BCD\u0B92\u0B92/g, "\u0BB2\u0BCA"); //loo
				text = text.replace(/\u0BB2\u0BCD\u0B93/g, "\u0BB2\u0BCB"); //loo
				text = text.replace(/\u0BB2\u0BCD\u0B94/g, "\u0BB2\u0BCC"); //lau



				//va and wa series

				text = text.replace(/va/g, "\u0BB5");
				text = text.replace(/vaa/g, "\u0BB5\u0BBE");
				text = text.replace(/vi/g, "\u0BB5\u0BBF");
				text = text.replace(/vii/g, "\u0BB5\u0BC0");
				text = text.replace(/vu/g, "\u0BB5\u0BC1");
				text = text.replace(/vuu/g, "\u0BB5\u0BC2");
				text = text.replace(/ve/g, "\u0BB5\u0BC6");
				text = text.replace(/vee/g, "\u0BB5\u0BC7");
				text = text.replace(/vai/g, "\u0BB5\u0BC8");
				text = text.replace(/vo/g, "\u0BB5\u0BCA");
				text = text.replace(/voo/g, "\u0BB5\u0BCB");
				text = text.replace(/vau/g, "\u0BB5\u0BCC");

				//va and wa series replacer
				
				text = text.replace(/\u0BB5\u0BCD\u0B85/g, "\u0BB5"); //va or wa
				text = text.replace(/\u0BB5\u0BCD\u0B85\u0B85/g, "\u0BB5\u0BBE"); //vaa or waa
				text = text.replace(/\u0BB5\u0BCD\u0B86/g, "\u0BB5\u0BBE"); //vaa or waa
				text = text.replace(/\u0BB5\u0BCD\u0B87/g, "\u0BB5\u0BBF"); //vi or wi
				text = text.replace(/\u0BB5\u0BCD\u0B87\u0B87/g, "\u0BB5\u0BC0"); //vii or wii
				text = text.replace(/\u0BB5\u0BCD\u0B88/g, "\u0BB5\u0BC0"); //vii or wii
				text = text.replace(/\u0BB5\u0BCD\u0B89/g, "\u0BB5\u0BC1"); //vu or wu
				text = text.replace(/\u0BB5\u0BCD\u0B89\u0B89/g, "\u0BB5\u0BC2"); //vuu or wuu
				text = text.replace(/\u0BB5\u0BCD\u0B8A/g, "\u0BB5\u0BC2"); //vuu or wuu
				text = text.replace(/\u0BB5\u0BCD\u0B8E/g, "\u0BB5\u0BC6"); //ve or we
				text = text.replace(/\u0BB5\u0BCD\u0B8E\u0B8E/g, "\u0BB5\u0BC6"); //vee or wee
				text = text.replace(/\u0BB5\u0BCD\u0B8F/g, "\u0BB5\u0BC7"); //vee or wee
				text = text.replace(/\u0BB5\u0BCD\u0B90/g, "\u0BB5\u0BC8"); //vai or wai
				text = text.replace(/\u0BB5\u0BCD\u0B92/g, "\u0BB5\u0BCA"); //vo or wo
				text = text.replace(/\u0BB5\u0BCD\u0B92\u0B92/g, "\u0BB5\u0BCA"); //voo or woo
				text = text.replace(/\u0BB5\u0BCD\u0B93/g, "\u0BB5\u0BCB"); //voo or woo
				text = text.replace(/\u0BB5\u0BCD\u0B94/g, "\u0BB5\u0BCC"); //vau or wau


				//za series

				text = text.replace(/za/g, "\u0BB4");
				text = text.replace(/zaa/g, "\u0BB4\u0BBE");
				text = text.replace(/zi/g, "\u0BB4\u0BBF");
				text = text.replace(/zii/g, "\u0BB4\u0BC0");
				text = text.replace(/zu/g, "\u0BB4\u0BC1");
				text = text.replace(/zuu/g, "\u0BB4\u0BC2");
				text = text.replace(/ze/g, "\u0BB4\u0BC6");
				text = text.replace(/zee/g, "\u0BB4\u0BC7");
				text = text.replace(/zai/g, "\u0BB4\u0BC8");
				text = text.replace(/zo/g, "\u0BB4\u0BCA");
				text = text.replace(/zoo/g, "\u0BB4\u0BCB");
				text = text.replace(/zau/g, "\u0BB4\u0BCC");

				//za series replacer
				
				text = text.replace(/\u0BB4\u0BCD\u0B85/g, "\u0BB4"); //za
				text = text.replace(/\u0BB4\u0BCD\u0B85\u0B85/g, "\u0BB4\u0BBE"); //zaa
				text = text.replace(/\u0BB4\u0BCD\u0B86/g, "\u0BB4\u0BBE"); //zaa
				text = text.replace(/\u0BB4\u0BCD\u0B87/g, "\u0BB4\u0BBF"); //zi
				text = text.replace(/\u0BB4\u0BCD\u0B87\u0B87/g, "\u0BB4\u0BC0"); //zii
				text = text.replace(/\u0BB4\u0BCD\u0B88/g, "\u0BB4\u0BC0"); //zii
				text = text.replace(/\u0BB4\u0BCD\u0B89/g, "\u0BB4\u0BC1"); //zu
				text = text.replace(/\u0BB4\u0BCD\u0B89\u0B89/g, "\u0BB4\u0BC2"); //zuu
				text = text.replace(/\u0BB4\u0BCD\u0B8A/g, "\u0BB4\u0BC2"); //zuu
				text = text.replace(/\u0BB4\u0BCD\u0B8E/g, "\u0BB4\u0BC6"); //ze
				text = text.replace(/\u0BB4\u0BCD\u0B8E\u0B8E/g, "\u0BB4\u0BC6"); //zee
				text = text.replace(/\u0BB4\u0BCD\u0B8F/g, "\u0BB4\u0BC7"); //zee
				text = text.replace(/\u0BB4\u0BCD\u0B90/g, "\u0BB4\u0BC8"); //zai
				text = text.replace(/\u0BB4\u0BCD\u0B92/g, "\u0BB4\u0BCA"); //zo
				text = text.replace(/\u0BB4\u0BCD\u0B92\u0B92/g, "\u0BB4\u0BCA"); //zoo
				text = text.replace(/\u0BB4\u0BCD\u0B93/g, "\u0BB4\u0BCB"); //zoo
				text = text.replace(/\u0BB4\u0BCD\u0B94/g, "\u0BB4\u0BCC"); //zau


				//La series

				text = text.replace(/La/g, "\u0BB3");
				text = text.replace(/Laa/g, "\u0BB3\u0BBE");
				text = text.replace(/Li/g, "\u0BB3\u0BBF");
				text = text.replace(/Lii/g, "\u0BB3\u0BC0");
				text = text.replace(/Lu/g, "\u0BB3\u0BC1");
				text = text.replace(/Luu/g, "\u0BB3\u0BC2");
				text = text.replace(/Le/g, "\u0BB3\u0BC6");
				text = text.replace(/Lee/g, "\u0BB3\u0BC7");
				text = text.replace(/Lai/g, "\u0BB3\u0BC8");
				text = text.replace(/Lo/g, "\u0BB3\u0BCA");
				text = text.replace(/Loo/g, "\u0BB3\u0BCB");
				text = text.replace(/Lau/g, "\u0BB3\u0BCC");

				//La series replacer
				
				text = text.replace(/\u0BB3\u0BCD\u0B85/g, "\u0BB3"); //La
				text = text.replace(/\u0BB3\u0BCD\u0B85\u0B85/g, "\u0BB3\u0BBE"); //Laa
				text = text.replace(/\u0BB3\u0BCD\u0B86/g, "\u0BB3\u0BBE"); //Laa
				text = text.replace(/\u0BB3\u0BCD\u0B87/g, "\u0BB3\u0BBF"); //Li
				text = text.replace(/\u0BB3\u0BCD\u0B87\u0B87/g, "\u0BB3\u0BC0"); //Lii
				text = text.replace(/\u0BB3\u0BCD\u0B88/g, "\u0BB3\u0BC0"); //Lii
				text = text.replace(/\u0BB3\u0BCD\u0B89/g, "\u0BB3\u0BC1"); //Lu
				text = text.replace(/\u0BB3\u0BCD\u0B89\u0B89/g, "\u0BB3\u0BC2"); //Luu
				text = text.replace(/\u0BB3\u0BCD\u0B8A/g, "\u0BB3\u0BC2"); //Luu
				text = text.replace(/\u0BB3\u0BCD\u0B8E/g, "\u0BB3\u0BC6"); //Le
				text = text.replace(/\u0BB3\u0BCD\u0B8E\u0B8E/g, "\u0BB3\u0BC6"); //Lee
				text = text.replace(/\u0BB3\u0BCD\u0B8F/g, "\u0BB3\u0BC7"); //Lee
				text = text.replace(/\u0BB3\u0BCD\u0B90/g, "\u0BB3\u0BC8"); //Lai
				text = text.replace(/\u0BB3\u0BCD\u0B92/g, "\u0BB3\u0BCA"); //Lo
				text = text.replace(/\u0BB3\u0BCD\u0B92\u0B92/g, "\u0BB3\u0BCA"); //Loo
				text = text.replace(/\u0BB3\u0BCD\u0B93/g, "\u0BB3\u0BCB"); //Loo
				text = text.replace(/\u0BB3\u0BCD\u0B94/g, "\u0BB3\u0BCC"); //Lau


				//Ra series

				text = text.replace(/Ra/g, "\u0BB1");
				text = text.replace(/Raa/g, "\u0BB1\u0BBE");
				text = text.replace(/Ri/g, "\u0BB1\u0BBF");
				text = text.replace(/Rii/g, "\u0BB1\u0BC0");
				text = text.replace(/Ru/g, "\u0BB1\u0BC1");
				text = text.replace(/Ruu/g, "\u0BB1\u0BC2");
				text = text.replace(/Re/g, "\u0BB1\u0BC6");
				text = text.replace(/Ree/g, "\u0BB1\u0BC7");
				text = text.replace(/Rai/g, "\u0BB1\u0BC8");
				text = text.replace(/Ro/g, "\u0BB1\u0BCA");
				text = text.replace(/Roo/g, "\u0BB1\u0BCB");
				text = text.replace(/Rau/g, "\u0BB1\u0BCC");

				//Ra series replacer
				
				text = text.replace(/\u0BB1\u0BCD\u0B85/g, "\u0BB1"); //Ra
				text = text.replace(/\u0BB1\u0BCD\u0B85\u0B85/g, "\u0BB1\u0BBE"); //Raa
				text = text.replace(/\u0BB1\u0BCD\u0B86/g, "\u0BB1\u0BBE"); //Raa
				text = text.replace(/\u0BB1\u0BCD\u0B87/g, "\u0BB1\u0BBF"); //Ri
				text = text.replace(/\u0BB1\u0BCD\u0B87\u0B87/g, "\u0BB1\u0BC0"); //Rii
				text = text.replace(/\u0BB1\u0BCD\u0B88/g, "\u0BB1\u0BC0"); //Rii
				text = text.replace(/\u0BB1\u0BCD\u0B89/g, "\u0BB1\u0BC1"); //Ru
				text = text.replace(/\u0BB1\u0BCD\u0B89\u0B89/g, "\u0BB1\u0BC2"); //Ruu
				text = text.replace(/\u0BB1\u0BCD\u0B8A/g, "\u0BB1\u0BC2"); //Ruu
				text = text.replace(/\u0BB1\u0BCD\u0B8E/g, "\u0BB1\u0BC6"); //Re
				text = text.replace(/\u0BB1\u0BCD\u0B8E\u0B8E/g, "\u0BB1\u0BC6"); //Ree
				text = text.replace(/\u0BB1\u0BCD\u0B8F/g, "\u0BB1\u0BC7"); //Ree
				text = text.replace(/\u0BB1\u0BCD\u0B90/g, "\u0BB1\u0BC8"); //Rai
				text = text.replace(/\u0BB1\u0BCD\u0B92/g, "\u0BB1\u0BCA"); //Ro
				text = text.replace(/\u0BB1\u0BCD\u0B92\u0B92/g, "\u0BB1\u0BCA"); //Roo
				text = text.replace(/\u0BB1\u0BCD\u0B93/g, "\u0BB1\u0BCB"); //Roo
				text = text.replace(/\u0BB1\u0BCD\u0B94/g, "\u0BB1\u0BCC"); //Rau


				//na series

				text = text.replace(/na/g, "\u0BA9");
				text = text.replace(/naa/g, "\u0BA9\u0BBE");
				text = text.replace(/ni/g, "\u0BA9\u0BBF");
				text = text.replace(/nii/g, "\u0BA9\u0BC0");
				text = text.replace(/nu/g, "\u0BA9\u0BC1");
				text = text.replace(/nuu/g, "\u0BA9\u0BC2");
				text = text.replace(/ne/g, "\u0BA9\u0BC6");
				text = text.replace(/nee/g, "\u0BA9\u0BC7");
				text = text.replace(/nai/g, "\u0BA9\u0BC8");
				text = text.replace(/no/g, "\u0BA9\u0BCA");
				text = text.replace(/noo/g, "\u0BA9\u0BCB");
				text = text.replace(/nau/g, "\u0BA9\u0BCC");

				//na series replacer
				
				text = text.replace(/\u0BA9\u0BCD\u0B85/g, "\u0BA9"); //na
				text = text.replace(/\u0BA9\u0BCD\u0B85\u0B85/g, "\u0BA9\u0BBE"); //naa
				text = text.replace(/\u0BA9\u0BCD\u0B86/g, "\u0BA9\u0BBE"); //naa
				text = text.replace(/\u0BA9\u0BCD\u0B87/g, "\u0BA9\u0BBF"); //ni
				text = text.replace(/\u0BA9\u0BCD\u0B87\u0B87/g, "\u0BA9\u0BC0"); //nii
				text = text.replace(/\u0BA9\u0BCD\u0B88/g, "\u0BA9\u0BC0"); //nii
				text = text.replace(/\u0BA9\u0BCD\u0B89/g, "\u0BA9\u0BC1"); //nu
				text = text.replace(/\u0BA9\u0BCD\u0B89\u0B89/g, "\u0BA9\u0BC2"); //nuu
				text = text.replace(/\u0BA9\u0BCD\u0B8A/g, "\u0BA9\u0BC2"); //nuu
				text = text.replace(/\u0BA9\u0BCD\u0B8E/g, "\u0BA9\u0BC6"); //ne
				text = text.replace(/\u0BA9\u0BCD\u0B8E\u0B8E/g, "\u0BA9\u0BC6"); //nee
				text = text.replace(/\u0BA9\u0BCD\u0B8F/g, "\u0BA9\u0BC7"); //nee
				text = text.replace(/\u0BA9\u0BCD\u0B90/g, "\u0BA9\u0BC8"); //nai
				text = text.replace(/\u0BA9\u0BCD\u0B92/g, "\u0BA9\u0BCA"); //no
				text = text.replace(/\u0BA9\u0BCD\u0B92\u0B92/g, "\u0BA9\u0BCA"); //noo
				text = text.replace(/\u0BA9\u0BCD\u0B93/g, "\u0BA9\u0BCB"); //noo
				text = text.replace(/\u0BA9\u0BCD\u0B94/g, "\u0BA9\u0BCC"); //nau

				//ja series

				text = text.replace(/ja/g, "\u0B9C");
				text = text.replace(/jaa/g, "\u0B9C\u0BBE");
				text = text.replace(/ji/g, "\u0B9C\u0BBF");
				text = text.replace(/jii/g, "\u0B9C\u0BC0");
				text = text.replace(/ju/g, "\u0B9C\u0BC1");
				text = text.replace(/juu/g, "\u0B9C\u0BC2");
				text = text.replace(/je/g, "\u0B9C\u0BC6");
				text = text.replace(/jee/g, "\u0B9C\u0BC7");
				text = text.replace(/jai/g, "\u0B9C\u0BC8");
				text = text.replace(/jo/g, "\u0B9C\u0BCA");
				text = text.replace(/joo/g, "\u0B9C\u0BCB");
				text = text.replace(/jau/g, "\u0B9C\u0BCC");

				//ja series replacer
				
				text = text.replace(/\u0B9C\u0BCD\u0B85/g, "\u0B9C"); //ja
				text = text.replace(/\u0B9C\u0BCD\u0B85\u0B85/g, "\u0B9C\u0BBE"); //jaa
				text = text.replace(/\u0B9C\u0BCD\u0B86/g, "\u0B9C\u0BBE"); //jaa
				text = text.replace(/\u0B9C\u0BCD\u0B87/g, "\u0B9C\u0BBF"); //ji
				text = text.replace(/\u0B9C\u0BCD\u0B87\u0B87/g, "\u0B9C\u0BC0"); //jii
				text = text.replace(/\u0B9C\u0BCD\u0B88/g, "\u0B9C\u0BC0"); //jii
				text = text.replace(/\u0B9C\u0BCD\u0B89/g, "\u0B9C\u0BC1"); //ju
				text = text.replace(/\u0B9C\u0BCD\u0B89\u0B89/g, "\u0B9C\u0BC2"); //juu
				text = text.replace(/\u0B9C\u0BCD\u0B8A/g, "\u0B9C\u0BC2"); //juu
				text = text.replace(/\u0B9C\u0BCD\u0B8E/g, "\u0B9C\u0BC6"); //je
				text = text.replace(/\u0B9C\u0BCD\u0B8E\u0B8E/g, "\u0B9C\u0BC6"); //jee
				text = text.replace(/\u0B9C\u0BCD\u0B8F/g, "\u0B9C\u0BC7"); //jee
				text = text.replace(/\u0B9C\u0BCD\u0B90/g, "\u0B9C\u0BC8"); //jai
				text = text.replace(/\u0B9C\u0BCD\u0B92/g, "\u0B9C\u0BCA"); //jo
				text = text.replace(/\u0B9C\u0BCD\u0B92\u0B92/g, "\u0B9C\u0BCA"); //joo
				text = text.replace(/\u0B9C\u0BCD\u0B93/g, "\u0B9C\u0BCB"); //joo
				text = text.replace(/\u0B9C\u0BCD\u0B94/g, "\u0B9C\u0BCC"); //jau


				//Sa series

				text = text.replace(/Sa/g, "\u0BB8");
				text = text.replace(/Saa/g, "\u0BB8\u0BBE");
				text = text.replace(/Si/g, "\u0BB8\u0BBF");
				text = text.replace(/Sii/g, "\u0BB8\u0BC0");
				text = text.replace(/Su/g, "\u0BB8\u0BC1");
				text = text.replace(/Suu/g, "\u0BB8\u0BC2");
				text = text.replace(/Se/g, "\u0BB8\u0BC6");
				text = text.replace(/See/g, "\u0BB8\u0BC7");
				text = text.replace(/Sai/g, "\u0BB8\u0BC8");
				text = text.replace(/So/g, "\u0BB8\u0BCA");
				text = text.replace(/Soo/g, "\u0BB8\u0BCB");
				text = text.replace(/Sau/g, "\u0BB8\u0BCC");

				//Sa series replacer
				
				text = text.replace(/\u0BB8\u0BCD\u0B85/g, "\u0BB8"); //Sa
				text = text.replace(/\u0BB8\u0BCD\u0B85\u0B85/g, "\u0BB8\u0BBE"); //Saa
				text = text.replace(/\u0BB8\u0BCD\u0B86/g, "\u0BB8\u0BBE"); //Saa
				text = text.replace(/\u0BB8\u0BCD\u0B87/g, "\u0BB8\u0BBF"); //Si
				text = text.replace(/\u0BB8\u0BCD\u0B87\u0B87/g, "\u0BB8\u0BC0"); //Sii
				text = text.replace(/\u0BB8\u0BCD\u0B88/g, "\u0BB8\u0BC0"); //Sii
				text = text.replace(/\u0BB8\u0BCD\u0B89/g, "\u0BB8\u0BC1"); //Su
				text = text.replace(/\u0BB8\u0BCD\u0B89\u0B89/g, "\u0BB8\u0BC2"); //Suu
				text = text.replace(/\u0BB8\u0BCD\u0B8A/g, "\u0BB8\u0BC2"); //Suu
				text = text.replace(/\u0BB8\u0BCD\u0B8E/g, "\u0BB8\u0BC6"); //Se
				text = text.replace(/\u0BB8\u0BCD\u0B8E\u0B8E/g, "\u0BB8\u0BC6"); //See
				text = text.replace(/\u0BB8\u0BCD\u0B8F/g, "\u0BB8\u0BC7"); //See
				text = text.replace(/\u0BB8\u0BCD\u0B90/g, "\u0BB8\u0BC8"); //Sai
				text = text.replace(/\u0BB8\u0BCD\u0B92/g, "\u0BB8\u0BCA"); //So
				text = text.replace(/\u0BB8\u0BCD\u0B92\u0B92/g, "\u0BB8\u0BCA"); //Soo
				text = text.replace(/\u0BB8\u0BCD\u0B93/g, "\u0BB8\u0BCB"); //Soo
				text = text.replace(/\u0BB8\u0BCD\u0B94/g, "\u0BB8\u0BCC"); //Sau


				//Ca series

				text = text.replace(/Ca/g, "\u0BB7");
				text = text.replace(/Caa/g, "\u0BB7\u0BBE");
				text = text.replace(/Ci/g, "\u0BB7\u0BBF");
				text = text.replace(/Cii/g, "\u0BB7\u0BC0");
				text = text.replace(/Cu/g, "\u0BB7\u0BC1");
				text = text.replace(/Cuu/g, "\u0BB7\u0BC2");
				text = text.replace(/Ce/g, "\u0BB7\u0BC6");
				text = text.replace(/Cee/g, "\u0BB7\u0BC7");
				text = text.replace(/Cai/g, "\u0BB7\u0BC8");
				text = text.replace(/Co/g, "\u0BB7\u0BCA");
				text = text.replace(/Coo/g, "\u0BB7\u0BCB");
				text = text.replace(/Cau/g, "\u0BB7\u0BCC");

				//Ca series replacer
				
				text = text.replace(/\u0BB7\u0BCD\u0B85/g, "\u0BB7"); //Ca
				text = text.replace(/\u0BB7\u0BCD\u0B85\u0B85/g, "\u0BB7\u0BBE"); //Caa
				text = text.replace(/\u0BB7\u0BCD\u0B86/g, "\u0BB7\u0BBE"); //Caa
				text = text.replace(/\u0BB7\u0BCD\u0B87/g, "\u0BB7\u0BBF"); //Ci
				text = text.replace(/\u0BB7\u0BCD\u0B87\u0B87/g, "\u0BB7\u0BC0"); //Cii
				text = text.replace(/\u0BB7\u0BCD\u0B88/g, "\u0BB7\u0BC0"); //Cii
				text = text.replace(/\u0BB7\u0BCD\u0B89/g, "\u0BB7\u0BC1"); //Cu
				text = text.replace(/\u0BB7\u0BCD\u0B89\u0B89/g, "\u0BB7\u0BC2"); //Cuu
				text = text.replace(/\u0BB7\u0BCD\u0B8A/g, "\u0BB7\u0BC2"); //Cuu
				text = text.replace(/\u0BB7\u0BCD\u0B8E/g, "\u0BB7\u0BC6"); //Ce
				text = text.replace(/\u0BB7\u0BCD\u0B8E\u0B8E/g, "\u0BB7\u0BC6"); //Cee
				text = text.replace(/\u0BB7\u0BCD\u0B8F/g, "\u0BB7\u0BC7"); //Cee
				text = text.replace(/\u0BB7\u0BCD\u0B90/g, "\u0BB7\u0BC8"); //Cai
				text = text.replace(/\u0BB7\u0BCD\u0B92/g, "\u0BB7\u0BCA"); //Co
				text = text.replace(/\u0BB7\u0BCD\u0B92\u0B92/g, "\u0BB7\u0BCA"); //Coo
				text = text.replace(/\u0BB7\u0BCD\u0B93/g, "\u0BB7\u0BCB"); //Coo
				text = text.replace(/\u0BB7\u0BCD\u0B94/g, "\u0BB7\u0BCC"); //Cau

				//ha series

				text = text.replace(/ha/g, "\u0BB9");
				text = text.replace(/haa/g, "\u0BB9\u0BBE");
				text = text.replace(/hi/g, "\u0BB9\u0BBF");
				text = text.replace(/hii/g, "\u0BB9\u0BC0");
				text = text.replace(/hu/g, "\u0BB9\u0BC1");
				text = text.replace(/huu/g, "\u0BB9\u0BC2");
				text = text.replace(/he/g, "\u0BB9\u0BC6");
				text = text.replace(/hee/g, "\u0BB9\u0BC7");
				text = text.replace(/hai/g, "\u0BB9\u0BC8");
				text = text.replace(/ho/g, "\u0BB9\u0BCA");
				text = text.replace(/hoo/g, "\u0BB9\u0BCB");
				text = text.replace(/hau/g, "\u0BB9\u0BCC");

				//ha series replacer
				
				text = text.replace(/\u0BB9\u0BCD\u0B85/g, "\u0BB9"); //ha
				text = text.replace(/\u0BB9\u0BCD\u0B85\u0B85/g, "\u0BB9\u0BBE"); //haa
				text = text.replace(/\u0BB9\u0BCD\u0B86/g, "\u0BB9\u0BBE"); //haa
				text = text.replace(/\u0BB9\u0BCD\u0B87/g, "\u0BB9\u0BBF"); //hi
				text = text.replace(/\u0BB9\u0BCD\u0B87\u0B87/g, "\u0BB9\u0BC0"); //hii
				text = text.replace(/\u0BB9\u0BCD\u0B88/g, "\u0BB9\u0BC0"); //hii
				text = text.replace(/\u0BB9\u0BCD\u0B89/g, "\u0BB9\u0BC1"); //hu
				text = text.replace(/\u0BB9\u0BCD\u0B89\u0B89/g, "\u0BB9\u0BC2"); //huu
				text = text.replace(/\u0BB9\u0BCD\u0B8A/g, "\u0BB9\u0BC2"); //huu
				text = text.replace(/\u0BB9\u0BCD\u0B8E/g, "\u0BB9\u0BC6"); //he
				text = text.replace(/\u0BB9\u0BCD\u0B8E\u0B8E/g, "\u0BB9\u0BC6"); //hee
				text = text.replace(/\u0BB9\u0BCD\u0B8F/g, "\u0BB9\u0BC7"); //hee
				text = text.replace(/\u0BB9\u0BCD\u0B90/g, "\u0BB9\u0BC8"); //hai
				text = text.replace(/\u0BB9\u0BCD\u0B92/g, "\u0BB9\u0BCA"); //ho
				text = text.replace(/\u0BB9\u0BCD\u0B92\u0B92/g, "\u0BB9\u0BCA"); //hoo
				text = text.replace(/\u0BB9\u0BCD\u0B93/g, "\u0BB9\u0BCB"); //hoo
				text = text.replace(/\u0BB9\u0BCD\u0B94/g, "\u0BB9\u0BCC"); //hau


			return text;
	}

}

function ta_phonetic_combine_unicode(text) {

	if (!is_not_valid(text)) {
			
			//Tamil consonental vowels

				//ka and ga series

				//ka and ga series replacer
				
				text = text.replace(/\u0B95\u0BCD\u0B85/g, "\u0B95"); //ka or ga
				text = text.replace(/\u0B95\u0BCD\u0B86/g, "\u0B95\u0BBE"); //kaa or gaa
				text = text.replace(/\u0B95\u0BCD\u0B85\u0B85/g, "\u0B95\u0BBE"); //kaa or gaa

				text = text.replace(/\u0B95\u0B85/g, "\u0B95\u0BBE"); //kaa or gaa

				text = text.replace(/\u0B95\u0BCD\u0B87/g, "\u0B95\u0BBF"); //ki or gi
				text = text.replace(/\u0B95\u0BCD\u0B87\u0B87/g, "\u0B95\u0BC0"); //kii or gii
				text = text.replace(/\u0B95\u0BCD\u0B88/g, "\u0B95\u0BC0"); //kii or gii

				text = text.replace(/\u0B95\u0BBF\u0B87/g, "\u0B95\u0BC0"); //kii or gii

				text = text.replace(/\u0B95\u0BCD\u0B89/g, "\u0B95\u0BC1"); //ku or gu
				text = text.replace(/\u0B95\u0BCD\u0B89\u0B89/g, "\u0B95\u0BC2"); //kuu or guu
				text = text.replace(/\u0B95\u0BCD\u0B8A/g, "\u0B95\u0BC2"); //kuu or guu

				text = text.replace(/\u0B95\u0BC1\u0B89/g, "\u0B95\u0BC2"); //kuu or guu

				text = text.replace(/\u0B95\u0BCD\u0B8E/g, "\u0B95\u0BC6"); //ke or ge
				text = text.replace(/\u0B95\u0BCD\u0B8E\u0B8E/g, "\u0B95\u0BC7"); //kee or gee
				text = text.replace(/\u0B95\u0BCD\u0B8F/g, "\u0B95\u0BC7"); //kee or gee

				text = text.replace(/\u0B95\u0BC6\u0B8E/g, "\u0B95\u0BC7"); //kee or gee

				text = text.replace(/\u0B95\u0BCD\u0B90/g, "\u0B95\u0BC8"); //kai or gai

				text = text.replace(/\u0B95\u0B87/g, "\u0B95\u0BC8"); //kai or gai

				text = text.replace(/\u0B95\u0BCD\u0B92/g, "\u0B95\u0BCA"); //ko or go
				text = text.replace(/\u0B95\u0BCD\u0B92\u0B92/g, "\u0B95\u0BCA"); //koo or goo
				text = text.replace(/\u0B95\u0BCD\u0B93/g, "\u0B95\u0BCB"); //koo or goo

				text = text.replace(/\u0B95\u0BCA\u0B92/g, "\u0B95\u0BCB"); //koo or goo

				text = text.replace(/\u0B95\u0BCD\u0B94/g, "\u0B95\u0BCC"); //kau or gau

				text = text.replace(/\u0B95\u0B89/g, "\u0B95\u0BCC"); //kau or gau				


				//nga series

				//nga series replacer
				
				text = text.replace(/\u0B99\u0BCD\u0B85/g, "\u0B99"); 
				text = text.replace(/\u0B99\u0BCD\u0B86/g, "\u0B99\u0BBE"); 
				text = text.replace(/\u0B99\u0BCD\u0B85\u0B85/g, "\u0B99\u0BBE"); 

				text = text.replace(/\u0B99\u0B85/g, "\u0B99\u0BBE");

				text = text.replace(/\u0B99\u0BCD\u0B87/g, "\u0B99\u0BBF");
				text = text.replace(/\u0B99\u0BCD\u0B87\u0B87/g, "\u0B99\u0BC0"); 
				text = text.replace(/\u0B99\u0BCD\u0B88/g, "\u0B99\u0BC0"); 

				text = text.replace(/\u0B99\u0BBF\u0B87/g, "\u0B99\u0BC0"); 

				text = text.replace(/\u0B99\u0BCD\u0B89/g, "\u0B99\u0BC1"); 
				text = text.replace(/\u0B99\u0BCD\u0B89\u0B89/g, "\u0B99\u0BC2"); 
				text = text.replace(/\u0B99\u0BCD\u0B8A/g, "\u0B99\u0BC2"); 

				text = text.replace(/\u0B99\u0BC1\u0B89/g, "\u0B99\u0BC2"); 

				text = text.replace(/\u0B99\u0BCD\u0B8E/g, "\u0B99\u0BC6"); 
				text = text.replace(/\u0B99\u0BCD\u0B8E\u0B8E/g, "\u0B99\u0BC7");
				text = text.replace(/\u0B99\u0BCD\u0B8F/g, "\u0B99\u0BC7"); 

				text = text.replace(/\u0B99\u0BC6\u0B8E/g, "\u0B99\u0BC7"); 

				text = text.replace(/\u0B99\u0BCD\u0B90/g, "\u0B99\u0BC8"); 

				text = text.replace(/\u0B99\u0B87/g, "\u0B99\u0BC8"); 

				text = text.replace(/\u0B99\u0BCD\u0B92/g, "\u0B99\u0BCA"); 
				text = text.replace(/\u0B99\u0BCD\u0B92\u0B92/g, "\u0B99\u0BCA"); 
				text = text.replace(/\u0B99\u0BCD\u0B93/g, "\u0B99\u0BCB"); 

				text = text.replace(/\u0B99\u0BCA\u0B92/g, "\u0B99\u0BCB"); 

				text = text.replace(/\u0B99\u0BCD\u0B94/g, "\u0B99\u0BCC"); 

				text = text.replace(/\u0B99\u0B89/g, "\u0B99\u0BCC"); 


				//sa and ca series

				//sa and ca series replacer
				
				text = text.replace(/\u0B9A\u0BCD\u0B85/g, "\u0B9A"); 
				text = text.replace(/\u0B9A\u0BCD\u0B86/g, "\u0B9A\u0BBE"); 
				text = text.replace(/\u0B9A\u0BCD\u0B85\u0B85/g, "\u0B9A\u0BBE"); 

				text = text.replace(/\u0B9A\u0B85/g, "\u0B9A\u0BBE");

				text = text.replace(/\u0B9A\u0BCD\u0B87/g, "\u0B9A\u0BBF");
				text = text.replace(/\u0B9A\u0BCD\u0B87\u0B87/g, "\u0B9A\u0BC0"); 
				text = text.replace(/\u0B9A\u0BCD\u0B88/g, "\u0B9A\u0BC0"); 

				text = text.replace(/\u0B9A\u0BBF\u0B87/g, "\u0B9A\u0BC0"); 

				text = text.replace(/\u0B9A\u0BCD\u0B89/g, "\u0B9A\u0BC1"); 
				text = text.replace(/\u0B9A\u0BCD\u0B89\u0B89/g, "\u0B9A\u0BC2"); 
				text = text.replace(/\u0B9A\u0BCD\u0B8A/g, "\u0B9A\u0BC2"); 

				text = text.replace(/\u0B9A\u0BC1\u0B89/g, "\u0B9A\u0BC2"); 

				text = text.replace(/\u0B9A\u0BCD\u0B8E/g, "\u0B9A\u0BC6"); 
				text = text.replace(/\u0B9A\u0BCD\u0B8E\u0B8E/g, "\u0B9A\u0BC7");
				text = text.replace(/\u0B9A\u0BCD\u0B8F/g, "\u0B9A\u0BC7"); 

				text = text.replace(/\u0B9A\u0BC6\u0B8E/g, "\u0B9A\u0BC7"); 

				text = text.replace(/\u0B9A\u0BCD\u0B90/g, "\u0B9A\u0BC8"); 

				text = text.replace(/\u0B9A\u0B87/g, "\u0B9A\u0BC8"); 

				text = text.replace(/\u0B9A\u0BCD\u0B92/g, "\u0B9A\u0BCA"); 
				text = text.replace(/\u0B9A\u0BCD\u0B92\u0B92/g, "\u0B9A\u0BCA"); 
				text = text.replace(/\u0B9A\u0BCD\u0B93/g, "\u0B9A\u0BCB"); 

				text = text.replace(/\u0B9A\u0BCA\u0B92/g, "\u0B9A\u0BCB"); 

				text = text.replace(/\u0B9A\u0BCD\u0B94/g, "\u0B9A\u0BCC"); 

				text = text.replace(/\u0B9A\u0B89/g, "\u0B9A\u0BCC"); 


				//nja series

				//nja series replacer
				
				text = text.replace(/\u0B9E\u0BCD\u0B85/g, "\u0B9E"); 
				text = text.replace(/\u0B9E\u0BCD\u0B86/g, "\u0B9E\u0BBE"); 
				text = text.replace(/\u0B9E\u0BCD\u0B85\u0B85/g, "\u0B9E\u0BBE"); 

				text = text.replace(/\u0B9E\u0B85/g, "\u0B9E\u0BBE");

				text = text.replace(/\u0B9E\u0BCD\u0B87/g, "\u0B9E\u0BBF");
				text = text.replace(/\u0B9E\u0BCD\u0B87\u0B87/g, "\u0B9E\u0BC0"); 
				text = text.replace(/\u0B9E\u0BCD\u0B88/g, "\u0B9E\u0BC0"); 

				text = text.replace(/\u0B9E\u0BBF\u0B87/g, "\u0B9E\u0BC0"); 

				text = text.replace(/\u0B9E\u0BCD\u0B89/g, "\u0B9E\u0BC1"); 
				text = text.replace(/\u0B9E\u0BCD\u0B89\u0B89/g, "\u0B9E\u0BC2"); 
				text = text.replace(/\u0B9E\u0BCD\u0B8A/g, "\u0B9E\u0BC2"); 

				text = text.replace(/\u0B9E\u0BC1\u0B89/g, "\u0B9E\u0BC2"); 

				text = text.replace(/\u0B9E\u0BCD\u0B8E/g, "\u0B9E\u0BC6"); 
				text = text.replace(/\u0B9E\u0BCD\u0B8E\u0B8E/g, "\u0B9E\u0BC7");
				text = text.replace(/\u0B9E\u0BCD\u0B8F/g, "\u0B9E\u0BC7"); 

				text = text.replace(/\u0B9E\u0BC6\u0B8E/g, "\u0B9E\u0BC7"); 

				text = text.replace(/\u0B9E\u0BCD\u0B90/g, "\u0B9E\u0BC8"); 

				text = text.replace(/\u0B9E\u0B87/g, "\u0B9E\u0BC8"); 

				text = text.replace(/\u0B9E\u0BCD\u0B92/g, "\u0B9E\u0BCA"); 
				text = text.replace(/\u0B9E\u0BCD\u0B92\u0B92/g, "\u0B9E\u0BCA"); 
				text = text.replace(/\u0B9E\u0BCD\u0B93/g, "\u0B9E\u0BCB"); 

				text = text.replace(/\u0B9E\u0BCA\u0B92/g, "\u0B9E\u0BCB"); 

				text = text.replace(/\u0B9E\u0BCD\u0B94/g, "\u0B9E\u0BCC"); 

				text = text.replace(/\u0B9E\u0B89/g, "\u0B9E\u0BCC"); 


				//ta and da series

				//ta and da series replacer
				
				text = text.replace(/\u0B9F\u0BCD\u0B85/g, "\u0B9F"); 
				text = text.replace(/\u0B9F\u0BCD\u0B86/g, "\u0B9F\u0BBE"); 
				text = text.replace(/\u0B9F\u0BCD\u0B85\u0B85/g, "\u0B9F\u0BBE"); 

				text = text.replace(/\u0B9F\u0B85/g, "\u0B9F\u0BBE");

				text = text.replace(/\u0B9F\u0BCD\u0B87/g, "\u0B9F\u0BBF");
				text = text.replace(/\u0B9F\u0BCD\u0B87\u0B87/g, "\u0B9F\u0BC0"); 
				text = text.replace(/\u0B9F\u0BCD\u0B88/g, "\u0B9F\u0BC0"); 

				text = text.replace(/\u0B9F\u0BBF\u0B87/g, "\u0B9F\u0BC0"); 

				text = text.replace(/\u0B9F\u0BCD\u0B89/g, "\u0B9F\u0BC1"); 
				text = text.replace(/\u0B9F\u0BCD\u0B89\u0B89/g, "\u0B9F\u0BC2"); 
				text = text.replace(/\u0B9F\u0BCD\u0B8A/g, "\u0B9F\u0BC2"); 

				text = text.replace(/\u0B9F\u0BC1\u0B89/g, "\u0B9F\u0BC2"); 

				text = text.replace(/\u0B9F\u0BCD\u0B8E/g, "\u0B9F\u0BC6"); 
				text = text.replace(/\u0B9F\u0BCD\u0B8E\u0B8E/g, "\u0B9F\u0BC7");
				text = text.replace(/\u0B9F\u0BCD\u0B8F/g, "\u0B9F\u0BC7"); 

				text = text.replace(/\u0B9F\u0BC6\u0B8E/g, "\u0B9F\u0BC7"); 

				text = text.replace(/\u0B9F\u0BCD\u0B90/g, "\u0B9F\u0BC8"); 

				text = text.replace(/\u0B9F\u0B87/g, "\u0B9F\u0BC8"); 

				text = text.replace(/\u0B9F\u0BCD\u0B92/g, "\u0B9F\u0BCA"); 
				text = text.replace(/\u0B9F\u0BCD\u0B92\u0B92/g, "\u0B9F\u0BCA"); 
				text = text.replace(/\u0B9F\u0BCD\u0B93/g, "\u0B9F\u0BCB"); 

				text = text.replace(/\u0B9F\u0BCA\u0B92/g, "\u0B9F\u0BCB"); 

				text = text.replace(/\u0B9F\u0BCD\u0B94/g, "\u0B9F\u0BCC"); 

				text = text.replace(/\u0B9F\u0B89/g, "\u0B9F\u0BCC"); 


				//Na series

				//Na series replacer
				
				text = text.replace(/\u0BA3\u0BCD\u0B85/g, "\u0BA3"); 
				text = text.replace(/\u0BA3\u0BCD\u0B86/g, "\u0BA3\u0BBE"); 
				text = text.replace(/\u0BA3\u0BCD\u0B85\u0B85/g, "\u0BA3\u0BBE"); 

				text = text.replace(/\u0BA3\u0B85/g, "\u0BA3\u0BBE");

				text = text.replace(/\u0BA3\u0BCD\u0B87/g, "\u0BA3\u0BBF");
				text = text.replace(/\u0BA3\u0BCD\u0B87\u0B87/g, "\u0BA3\u0BC0"); 
				text = text.replace(/\u0BA3\u0BCD\u0B88/g, "\u0BA3\u0BC0"); 

				text = text.replace(/\u0BA3\u0BBF\u0B87/g, "\u0BA3\u0BC0"); 

				text = text.replace(/\u0BA3\u0BCD\u0B89/g, "\u0BA3\u0BC1"); 
				text = text.replace(/\u0BA3\u0BCD\u0B89\u0B89/g, "\u0BA3\u0BC2"); 
				text = text.replace(/\u0BA3\u0BCD\u0B8A/g, "\u0BA3\u0BC2"); 

				text = text.replace(/\u0BA3\u0BC1\u0B89/g, "\u0BA3\u0BC2"); 

				text = text.replace(/\u0BA3\u0BCD\u0B8E/g, "\u0BA3\u0BC6"); 
				text = text.replace(/\u0BA3\u0BCD\u0B8E\u0B8E/g, "\u0BA3\u0BC7");
				text = text.replace(/\u0BA3\u0BCD\u0B8F/g, "\u0BA3\u0BC7"); 

				text = text.replace(/\u0BA3\u0BC6\u0B8E/g, "\u0BA3\u0BC7"); 

				text = text.replace(/\u0BA3\u0BCD\u0B90/g, "\u0BA3\u0BC8"); 

				text = text.replace(/\u0BA3\u0B87/g, "\u0BA3\u0BC8"); 

				text = text.replace(/\u0BA3\u0BCD\u0B92/g, "\u0BA3\u0BCA"); 
				text = text.replace(/\u0BA3\u0BCD\u0B92\u0B92/g, "\u0BA3\u0BCA"); 
				text = text.replace(/\u0BA3\u0BCD\u0B93/g, "\u0BA3\u0BCB"); 

				text = text.replace(/\u0BA3\u0BCA\u0B92/g, "\u0BA3\u0BCB"); 

				text = text.replace(/\u0BA3\u0BCD\u0B94/g, "\u0BA3\u0BCC"); 

				text = text.replace(/\u0BA3\u0B89/g, "\u0BA3\u0BCC"); 


				//tha series

				//tha series replacer
				
				text = text.replace(/\u0BA4\u0BCD\u0B85/g, "\u0BA4"); 
				text = text.replace(/\u0BA4\u0BCD\u0B86/g, "\u0BA4\u0BBE"); 
				text = text.replace(/\u0BA4\u0BCD\u0B85\u0B85/g, "\u0BA4\u0BBE"); 

				text = text.replace(/\u0BA4\u0B85/g, "\u0BA4\u0BBE");

				text = text.replace(/\u0BA4\u0BCD\u0B87/g, "\u0BA4\u0BBF");
				text = text.replace(/\u0BA4\u0BCD\u0B87\u0B87/g, "\u0BA4\u0BC0"); 
				text = text.replace(/\u0BA4\u0BCD\u0B88/g, "\u0BA4\u0BC0"); 

				text = text.replace(/\u0BA4\u0BBF\u0B87/g, "\u0BA4\u0BC0"); 

				text = text.replace(/\u0BA4\u0BCD\u0B89/g, "\u0BA4\u0BC1"); 
				text = text.replace(/\u0BA4\u0BCD\u0B89\u0B89/g, "\u0BA4\u0BC2"); 
				text = text.replace(/\u0BA4\u0BCD\u0B8A/g, "\u0BA4\u0BC2"); 

				text = text.replace(/\u0BA4\u0BC1\u0B89/g, "\u0BA4\u0BC2"); 

				text = text.replace(/\u0BA4\u0BCD\u0B8E/g, "\u0BA4\u0BC6"); 
				text = text.replace(/\u0BA4\u0BCD\u0B8E\u0B8E/g, "\u0BA4\u0BC7");
				text = text.replace(/\u0BA4\u0BCD\u0B8F/g, "\u0BA4\u0BC7"); 

				text = text.replace(/\u0BA4\u0BC6\u0B8E/g, "\u0BA4\u0BC7"); 

				text = text.replace(/\u0BA4\u0BCD\u0B90/g, "\u0BA4\u0BC8"); 

				text = text.replace(/\u0BA4\u0B87/g, "\u0BA4\u0BC8"); 

				text = text.replace(/\u0BA4\u0BCD\u0B92/g, "\u0BA4\u0BCA"); 
				text = text.replace(/\u0BA4\u0BCD\u0B92\u0B92/g, "\u0BA4\u0BCA"); 
				text = text.replace(/\u0BA4\u0BCD\u0B93/g, "\u0BA4\u0BCB"); 

				text = text.replace(/\u0BA4\u0BCA\u0B92/g, "\u0BA4\u0BCB"); 

				text = text.replace(/\u0BA4\u0BCD\u0B94/g, "\u0BA4\u0BCC"); 

				text = text.replace(/\u0BA4\u0B89/g, "\u0BA4\u0BCC"); 



				//ntha series

				//ntha series replacer
				
				text = text.replace(/\u0BA8\u0BCD\u0B85/g, "\u0BA8"); 
				text = text.replace(/\u0BA8\u0BCD\u0B86/g, "\u0BA8\u0BBE"); 
				text = text.replace(/\u0BA8\u0BCD\u0B85\u0B85/g, "\u0BA8\u0BBE"); 

				text = text.replace(/\u0BA8\u0B85/g, "\u0BA8\u0BBE");

				text = text.replace(/\u0BA8\u0BCD\u0B87/g, "\u0BA8\u0BBF");
				text = text.replace(/\u0BA8\u0BCD\u0B87\u0B87/g, "\u0BA8\u0BC0"); 
				text = text.replace(/\u0BA8\u0BCD\u0B88/g, "\u0BA8\u0BC0"); 

				text = text.replace(/\u0BA8\u0BBF\u0B87/g, "\u0BA8\u0BC0"); 

				text = text.replace(/\u0BA8\u0BCD\u0B89/g, "\u0BA8\u0BC1"); 
				text = text.replace(/\u0BA8\u0BCD\u0B89\u0B89/g, "\u0BA8\u0BC2"); 
				text = text.replace(/\u0BA8\u0BCD\u0B8A/g, "\u0BA8\u0BC2"); 

				text = text.replace(/\u0BA8\u0BC1\u0B89/g, "\u0BA8\u0BC2"); 

				text = text.replace(/\u0BA8\u0BCD\u0B8E/g, "\u0BA8\u0BC6"); 
				text = text.replace(/\u0BA8\u0BCD\u0B8E\u0B8E/g, "\u0BA8\u0BC7");
				text = text.replace(/\u0BA8\u0BCD\u0B8F/g, "\u0BA8\u0BC7"); 

				text = text.replace(/\u0BA8\u0BC6\u0B8E/g, "\u0BA8\u0BC7"); 

				text = text.replace(/\u0BA8\u0BCD\u0B90/g, "\u0BA8\u0BC8"); 

				text = text.replace(/\u0BA8\u0B87/g, "\u0BA8\u0BC8"); 

				text = text.replace(/\u0BA8\u0BCD\u0B92/g, "\u0BA8\u0BCA"); 
				text = text.replace(/\u0BA8\u0BCD\u0B92\u0B92/g, "\u0BA8\u0BCA"); 
				text = text.replace(/\u0BA8\u0BCD\u0B93/g, "\u0BA8\u0BCB"); 

				text = text.replace(/\u0BA8\u0BCA\u0B92/g, "\u0BA8\u0BCB"); 

				text = text.replace(/\u0BA8\u0BCD\u0B94/g, "\u0BA8\u0BCC"); 

				text = text.replace(/\u0BA8\u0B89/g, "\u0BA8\u0BCC"); 


				//pa and ba series
								

				//pa and ba series replacer
				
				text = text.replace(/\u0BAA\u0BCD\u0B85/g, "\u0BAA"); 
				text = text.replace(/\u0BAA\u0BCD\u0B86/g, "\u0BAA\u0BBE"); 
				text = text.replace(/\u0BAA\u0BCD\u0B85\u0B85/g, "\u0BAA\u0BBE"); 

				text = text.replace(/\u0BAA\u0B85/g, "\u0BAA\u0BBE");

				text = text.replace(/\u0BAA\u0BCD\u0B87/g, "\u0BAA\u0BBF");
				text = text.replace(/\u0BAA\u0BCD\u0B87\u0B87/g, "\u0BAA\u0BC0"); 
				text = text.replace(/\u0BAA\u0BCD\u0B88/g, "\u0BAA\u0BC0"); 

				text = text.replace(/\u0BAA\u0BBF\u0B87/g, "\u0BAA\u0BC0"); 

				text = text.replace(/\u0BAA\u0BCD\u0B89/g, "\u0BAA\u0BC1"); 
				text = text.replace(/\u0BAA\u0BCD\u0B89\u0B89/g, "\u0BAA\u0BC2"); 
				text = text.replace(/\u0BAA\u0BCD\u0B8A/g, "\u0BAA\u0BC2"); 

				text = text.replace(/\u0BAA\u0BC1\u0B89/g, "\u0BAA\u0BC2"); 

				text = text.replace(/\u0BAA\u0BCD\u0B8E/g, "\u0BAA\u0BC6"); 
				text = text.replace(/\u0BAA\u0BCD\u0B8E\u0B8E/g, "\u0BAA\u0BC7");
				text = text.replace(/\u0BAA\u0BCD\u0B8F/g, "\u0BAA\u0BC7"); 

				text = text.replace(/\u0BAA\u0BC6\u0B8E/g, "\u0BAA\u0BC7"); 

				text = text.replace(/\u0BAA\u0BCD\u0B90/g, "\u0BAA\u0BC8"); 

				text = text.replace(/\u0BAA\u0B87/g, "\u0BAA\u0BC8"); 

				text = text.replace(/\u0BAA\u0BCD\u0B92/g, "\u0BAA\u0BCA"); 
				text = text.replace(/\u0BAA\u0BCD\u0B92\u0B92/g, "\u0BAA\u0BCA"); 
				text = text.replace(/\u0BAA\u0BCD\u0B93/g, "\u0BAA\u0BCB"); 

				text = text.replace(/\u0BAA\u0BCA\u0B92/g, "\u0BAA\u0BCB"); 

				text = text.replace(/\u0BAA\u0BCD\u0B94/g, "\u0BAA\u0BCC"); 

				text = text.replace(/\u0BAA\u0B89/g, "\u0BAA\u0BCC"); 


				//ma series

				//ma series replacer
				
				text = text.replace(/\u0BAE\u0BCD\u0B85/g, "\u0BAE"); 
				text = text.replace(/\u0BAE\u0BCD\u0B86/g, "\u0BAE\u0BBE"); 
				text = text.replace(/\u0BAE\u0BCD\u0B85\u0B85/g, "\u0BAE\u0BBE"); 

				text = text.replace(/\u0BAE\u0B85/g, "\u0BAE\u0BBE");

				text = text.replace(/\u0BAE\u0BCD\u0B87/g, "\u0BAE\u0BBF");
				text = text.replace(/\u0BAE\u0BCD\u0B87\u0B87/g, "\u0BAE\u0BC0"); 
				text = text.replace(/\u0BAE\u0BCD\u0B88/g, "\u0BAE\u0BC0"); 

				text = text.replace(/\u0BAE\u0BBF\u0B87/g, "\u0BAE\u0BC0"); 

				text = text.replace(/\u0BAE\u0BCD\u0B89/g, "\u0BAE\u0BC1"); 
				text = text.replace(/\u0BAE\u0BCD\u0B89\u0B89/g, "\u0BAE\u0BC2"); 
				text = text.replace(/\u0BAE\u0BCD\u0B8A/g, "\u0BAE\u0BC2"); 

				text = text.replace(/\u0BAE\u0BC1\u0B89/g, "\u0BAE\u0BC2"); 

				text = text.replace(/\u0BAE\u0BCD\u0B8E/g, "\u0BAE\u0BC6"); 
				text = text.replace(/\u0BAE\u0BCD\u0B8E\u0B8E/g, "\u0BAE\u0BC7");
				text = text.replace(/\u0BAE\u0BCD\u0B8F/g, "\u0BAE\u0BC7"); 

				text = text.replace(/\u0BAE\u0BC6\u0B8E/g, "\u0BAE\u0BC7"); 

				text = text.replace(/\u0BAE\u0BCD\u0B90/g, "\u0BAE\u0BC8"); 

				text = text.replace(/\u0BAE\u0B87/g, "\u0BAE\u0BC8"); 

				text = text.replace(/\u0BAE\u0BCD\u0B92/g, "\u0BAE\u0BCA"); 
				text = text.replace(/\u0BAE\u0BCD\u0B92\u0B92/g, "\u0BAE\u0BCA"); 
				text = text.replace(/\u0BAE\u0BCD\u0B93/g, "\u0BAE\u0BCB"); 

				text = text.replace(/\u0BAE\u0BCA\u0B92/g, "\u0BAE\u0BCB"); 

				text = text.replace(/\u0BAE\u0BCD\u0B94/g, "\u0BAE\u0BCC"); 

				text = text.replace(/\u0BAE\u0B89/g, "\u0BAE\u0BCC"); 


				//ya series

				//ya series replacer
				
				text = text.replace(/\u0BAF\u0BCD\u0B85/g, "\u0BAF"); 
				text = text.replace(/\u0BAF\u0BCD\u0B86/g, "\u0BAF\u0BBE"); 
				text = text.replace(/\u0BAF\u0BCD\u0B85\u0B85/g, "\u0BAF\u0BBE"); 

				text = text.replace(/\u0BAF\u0B85/g, "\u0BAF\u0BBE");

				text = text.replace(/\u0BAF\u0BCD\u0B87/g, "\u0BAF\u0BBF");
				text = text.replace(/\u0BAF\u0BCD\u0B87\u0B87/g, "\u0BAF\u0BC0"); 
				text = text.replace(/\u0BAF\u0BCD\u0B88/g, "\u0BAF\u0BC0"); 

				text = text.replace(/\u0BAF\u0BBF\u0B87/g, "\u0BAF\u0BC0"); 

				text = text.replace(/\u0BAF\u0BCD\u0B89/g, "\u0BAF\u0BC1"); 
				text = text.replace(/\u0BAF\u0BCD\u0B89\u0B89/g, "\u0BAF\u0BC2"); 
				text = text.replace(/\u0BAF\u0BCD\u0B8A/g, "\u0BAF\u0BC2"); 

				text = text.replace(/\u0BAF\u0BC1\u0B89/g, "\u0BAF\u0BC2"); 

				text = text.replace(/\u0BAF\u0BCD\u0B8E/g, "\u0BAF\u0BC6"); 
				text = text.replace(/\u0BAF\u0BCD\u0B8E\u0B8E/g, "\u0BAF\u0BC7");
				text = text.replace(/\u0BAF\u0BCD\u0B8F/g, "\u0BAF\u0BC7"); 

				text = text.replace(/\u0BAF\u0BC6\u0B8E/g, "\u0BAF\u0BC7"); 

				text = text.replace(/\u0BAF\u0BCD\u0B90/g, "\u0BAF\u0BC8"); 

				text = text.replace(/\u0BAF\u0B87/g, "\u0BAF\u0BC8"); 

				text = text.replace(/\u0BAF\u0BCD\u0B92/g, "\u0BAF\u0BCA"); 
				text = text.replace(/\u0BAF\u0BCD\u0B92\u0B92/g, "\u0BAF\u0BCA"); 
				text = text.replace(/\u0BAF\u0BCD\u0B93/g, "\u0BAF\u0BCB"); 

				text = text.replace(/\u0BAF\u0BCA\u0B92/g, "\u0BAF\u0BCB"); 

				text = text.replace(/\u0BAF\u0BCD\u0B94/g, "\u0BAF\u0BCC"); 

				text = text.replace(/\u0BAF\u0B89/g, "\u0BAF\u0BCC"); 


				//ra series

				//ra series replacer
				
				text = text.replace(/\u0BB0\u0BCD\u0B85/g, "\u0BB0"); 
				text = text.replace(/\u0BB0\u0BCD\u0B86/g, "\u0BB0\u0BBE"); 
				text = text.replace(/\u0BB0\u0BCD\u0B85\u0B85/g, "\u0BB0\u0BBE"); 

				text = text.replace(/\u0BB0\u0B85/g, "\u0BB0\u0BBE");

				text = text.replace(/\u0BB0\u0BCD\u0B87/g, "\u0BB0\u0BBF");
				text = text.replace(/\u0BB0\u0BCD\u0B87\u0B87/g, "\u0BB0\u0BC0"); 
				text = text.replace(/\u0BB0\u0BCD\u0B88/g, "\u0BB0\u0BC0"); 

				text = text.replace(/\u0BB0\u0BBF\u0B87/g, "\u0BB0\u0BC0"); 

				text = text.replace(/\u0BB0\u0BCD\u0B89/g, "\u0BB0\u0BC1"); 
				text = text.replace(/\u0BB0\u0BCD\u0B89\u0B89/g, "\u0BB0\u0BC2"); 
				text = text.replace(/\u0BB0\u0BCD\u0B8A/g, "\u0BB0\u0BC2"); 

				text = text.replace(/\u0BB0\u0BC1\u0B89/g, "\u0BB0\u0BC2"); 

				text = text.replace(/\u0BB0\u0BCD\u0B8E/g, "\u0BB0\u0BC6"); 
				text = text.replace(/\u0BB0\u0BCD\u0B8E\u0B8E/g, "\u0BB0\u0BC7");
				text = text.replace(/\u0BB0\u0BCD\u0B8F/g, "\u0BB0\u0BC7"); 

				text = text.replace(/\u0BB0\u0BC6\u0B8E/g, "\u0BB0\u0BC7"); 

				text = text.replace(/\u0BB0\u0BCD\u0B90/g, "\u0BB0\u0BC8"); 

				text = text.replace(/\u0BB0\u0B87/g, "\u0BB0\u0BC8"); 

				text = text.replace(/\u0BB0\u0BCD\u0B92/g, "\u0BB0\u0BCA"); 
				text = text.replace(/\u0BB0\u0BCD\u0B92\u0B92/g, "\u0BB0\u0BCA"); 
				text = text.replace(/\u0BB0\u0BCD\u0B93/g, "\u0BB0\u0BCB"); 

				text = text.replace(/\u0BB0\u0BCA\u0B92/g, "\u0BB0\u0BCB"); 

				text = text.replace(/\u0BB0\u0BCD\u0B94/g, "\u0BB0\u0BCC"); 

				text = text.replace(/\u0BB0\u0B89/g, "\u0BB0\u0BCC"); 


				//la series

				//la series replacer
				
				text = text.replace(/\u0BB2\u0BCD\u0B85/g, "\u0BB2"); 
				text = text.replace(/\u0BB2\u0BCD\u0B86/g, "\u0BB2\u0BBE"); 
				text = text.replace(/\u0BB2\u0BCD\u0B85\u0B85/g, "\u0BB2\u0BBE"); 

				text = text.replace(/\u0BB2\u0B85/g, "\u0BB2\u0BBE");

				text = text.replace(/\u0BB2\u0BCD\u0B87/g, "\u0BB2\u0BBF");
				text = text.replace(/\u0BB2\u0BCD\u0B87\u0B87/g, "\u0BB2\u0BC0"); 
				text = text.replace(/\u0BB2\u0BCD\u0B88/g, "\u0BB2\u0BC0"); 

				text = text.replace(/\u0BB2\u0BBF\u0B87/g, "\u0BB2\u0BC0"); 

				text = text.replace(/\u0BB2\u0BCD\u0B89/g, "\u0BB2\u0BC1"); 
				text = text.replace(/\u0BB2\u0BCD\u0B89\u0B89/g, "\u0BB2\u0BC2"); 
				text = text.replace(/\u0BB2\u0BCD\u0B8A/g, "\u0BB2\u0BC2"); 

				text = text.replace(/\u0BB2\u0BC1\u0B89/g, "\u0BB2\u0BC2"); 

				text = text.replace(/\u0BB2\u0BCD\u0B8E/g, "\u0BB2\u0BC6"); 
				text = text.replace(/\u0BB2\u0BCD\u0B8E\u0B8E/g, "\u0BB2\u0BC7");
				text = text.replace(/\u0BB2\u0BCD\u0B8F/g, "\u0BB2\u0BC7"); 

				text = text.replace(/\u0BB2\u0BC6\u0B8E/g, "\u0BB2\u0BC7"); 

				text = text.replace(/\u0BB2\u0BCD\u0B90/g, "\u0BB2\u0BC8"); 

				text = text.replace(/\u0BB2\u0B87/g, "\u0BB2\u0BC8"); 

				text = text.replace(/\u0BB2\u0BCD\u0B92/g, "\u0BB2\u0BCA"); 
				text = text.replace(/\u0BB2\u0BCD\u0B92\u0B92/g, "\u0BB2\u0BCA"); 
				text = text.replace(/\u0BB2\u0BCD\u0B93/g, "\u0BB2\u0BCB"); 

				text = text.replace(/\u0BB2\u0BCA\u0B92/g, "\u0BB2\u0BCB"); 

				text = text.replace(/\u0BB2\u0BCD\u0B94/g, "\u0BB2\u0BCC"); 

				text = text.replace(/\u0BB2\u0B89/g, "\u0BB2\u0BCC"); 



				//va and wa series

				//va and wa series replacer
				
				text = text.replace(/\u0BB5\u0BCD\u0B85/g, "\u0BB5"); 
				text = text.replace(/\u0BB5\u0BCD\u0B86/g, "\u0BB5\u0BBE"); 
				text = text.replace(/\u0BB5\u0BCD\u0B85\u0B85/g, "\u0BB5\u0BBE"); 

				text = text.replace(/\u0BB5\u0B85/g, "\u0BB5\u0BBE");

				text = text.replace(/\u0BB5\u0BCD\u0B87/g, "\u0BB5\u0BBF");
				text = text.replace(/\u0BB5\u0BCD\u0B87\u0B87/g, "\u0BB5\u0BC0"); 
				text = text.replace(/\u0BB5\u0BCD\u0B88/g, "\u0BB5\u0BC0"); 

				text = text.replace(/\u0BB5\u0BBF\u0B87/g, "\u0BB5\u0BC0"); 

				text = text.replace(/\u0BB5\u0BCD\u0B89/g, "\u0BB5\u0BC1"); 
				text = text.replace(/\u0BB5\u0BCD\u0B89\u0B89/g, "\u0BB5\u0BC2"); 
				text = text.replace(/\u0BB5\u0BCD\u0B8A/g, "\u0BB5\u0BC2"); 

				text = text.replace(/\u0BB5\u0BC1\u0B89/g, "\u0BB5\u0BC2"); 

				text = text.replace(/\u0BB5\u0BCD\u0B8E/g, "\u0BB5\u0BC6"); 
				text = text.replace(/\u0BB5\u0BCD\u0B8E\u0B8E/g, "\u0BB5\u0BC7");
				text = text.replace(/\u0BB5\u0BCD\u0B8F/g, "\u0BB5\u0BC7"); 

				text = text.replace(/\u0BB5\u0BC6\u0B8E/g, "\u0BB5\u0BC7"); 

				text = text.replace(/\u0BB5\u0BCD\u0B90/g, "\u0BB5\u0BC8"); 

				text = text.replace(/\u0BB5\u0B87/g, "\u0BB5\u0BC8"); 

				text = text.replace(/\u0BB5\u0BCD\u0B92/g, "\u0BB5\u0BCA"); 
				text = text.replace(/\u0BB5\u0BCD\u0B92\u0B92/g, "\u0BB5\u0BCA"); 
				text = text.replace(/\u0BB5\u0BCD\u0B93/g, "\u0BB5\u0BCB"); 

				text = text.replace(/\u0BB5\u0BCA\u0B92/g, "\u0BB5\u0BCB"); 

				text = text.replace(/\u0BB5\u0BCD\u0B94/g, "\u0BB5\u0BCC"); 

				text = text.replace(/\u0BB5\u0B89/g, "\u0BB5\u0BCC"); 


				//za series

				//za series replacer
				
				text = text.replace(/\u0BB4\u0BCD\u0B85/g, "\u0BB4"); 
				text = text.replace(/\u0BB4\u0BCD\u0B86/g, "\u0BB4\u0BBE"); 
				text = text.replace(/\u0BB4\u0BCD\u0B85\u0B85/g, "\u0BB4\u0BBE"); 

				text = text.replace(/\u0BB4\u0B85/g, "\u0BB4\u0BBE");

				text = text.replace(/\u0BB4\u0BCD\u0B87/g, "\u0BB4\u0BBF");
				text = text.replace(/\u0BB4\u0BCD\u0B87\u0B87/g, "\u0BB4\u0BC0"); 
				text = text.replace(/\u0BB4\u0BCD\u0B88/g, "\u0BB4\u0BC0"); 

				text = text.replace(/\u0BB4\u0BBF\u0B87/g, "\u0BB4\u0BC0"); 

				text = text.replace(/\u0BB4\u0BCD\u0B89/g, "\u0BB4\u0BC1"); 
				text = text.replace(/\u0BB4\u0BCD\u0B89\u0B89/g, "\u0BB4\u0BC2"); 
				text = text.replace(/\u0BB4\u0BCD\u0B8A/g, "\u0BB4\u0BC2"); 

				text = text.replace(/\u0BB4\u0BC1\u0B89/g, "\u0BB4\u0BC2"); 

				text = text.replace(/\u0BB4\u0BCD\u0B8E/g, "\u0BB4\u0BC6"); 
				text = text.replace(/\u0BB4\u0BCD\u0B8E\u0B8E/g, "\u0BB4\u0BC7");
				text = text.replace(/\u0BB4\u0BCD\u0B8F/g, "\u0BB4\u0BC7"); 

				text = text.replace(/\u0BB4\u0BC6\u0B8E/g, "\u0BB4\u0BC7"); 

				text = text.replace(/\u0BB4\u0BCD\u0B90/g, "\u0BB4\u0BC8"); 

				text = text.replace(/\u0BB4\u0B87/g, "\u0BB4\u0BC8"); 

				text = text.replace(/\u0BB4\u0BCD\u0B92/g, "\u0BB4\u0BCA"); 
				text = text.replace(/\u0BB4\u0BCD\u0B92\u0B92/g, "\u0BB4\u0BCA"); 
				text = text.replace(/\u0BB4\u0BCD\u0B93/g, "\u0BB4\u0BCB"); 

				text = text.replace(/\u0BB4\u0BCA\u0B92/g, "\u0BB4\u0BCB"); 

				text = text.replace(/\u0BB4\u0BCD\u0B94/g, "\u0BB4\u0BCC"); 

				text = text.replace(/\u0BB4\u0B89/g, "\u0BB4\u0BCC"); 


				//La series

				//La series replacer
				
				text = text.replace(/\u0BB3\u0BCD\u0B85/g, "\u0BB3"); 
				text = text.replace(/\u0BB3\u0BCD\u0B86/g, "\u0BB3\u0BBE"); 
				text = text.replace(/\u0BB3\u0BCD\u0B85\u0B85/g, "\u0BB3\u0BBE"); 

				text = text.replace(/\u0BB3\u0B85/g, "\u0BB3\u0BBE");

				text = text.replace(/\u0BB3\u0BCD\u0B87/g, "\u0BB3\u0BBF");
				text = text.replace(/\u0BB3\u0BCD\u0B87\u0B87/g, "\u0BB3\u0BC0"); 
				text = text.replace(/\u0BB3\u0BCD\u0B88/g, "\u0BB3\u0BC0"); 

				text = text.replace(/\u0BB3\u0BBF\u0B87/g, "\u0BB3\u0BC0"); 

				text = text.replace(/\u0BB3\u0BCD\u0B89/g, "\u0BB3\u0BC1"); 
				text = text.replace(/\u0BB3\u0BCD\u0B89\u0B89/g, "\u0BB3\u0BC2"); 
				text = text.replace(/\u0BB3\u0BCD\u0B8A/g, "\u0BB3\u0BC2"); 

				text = text.replace(/\u0BB3\u0BC1\u0B89/g, "\u0BB3\u0BC2"); 

				text = text.replace(/\u0BB3\u0BCD\u0B8E/g, "\u0BB3\u0BC6"); 
				text = text.replace(/\u0BB3\u0BCD\u0B8E\u0B8E/g, "\u0BB3\u0BC7");
				text = text.replace(/\u0BB3\u0BCD\u0B8F/g, "\u0BB3\u0BC7"); 

				text = text.replace(/\u0BB3\u0BC6\u0B8E/g, "\u0BB3\u0BC7"); 

				text = text.replace(/\u0BB3\u0BCD\u0B90/g, "\u0BB3\u0BC8"); 

				text = text.replace(/\u0BB3\u0B87/g, "\u0BB3\u0BC8"); 

				text = text.replace(/\u0BB3\u0BCD\u0B92/g, "\u0BB3\u0BCA"); 
				text = text.replace(/\u0BB3\u0BCD\u0B92\u0B92/g, "\u0BB3\u0BCA"); 
				text = text.replace(/\u0BB3\u0BCD\u0B93/g, "\u0BB3\u0BCB"); 

				text = text.replace(/\u0BB3\u0BCA\u0B92/g, "\u0BB3\u0BCB"); 

				text = text.replace(/\u0BB3\u0BCD\u0B94/g, "\u0BB3\u0BCC"); 

				text = text.replace(/\u0BB3\u0B89/g, "\u0BB3\u0BCC"); 


				//Ra series

				//Ra series replacer
				
				text = text.replace(/\u0BB1\u0BCD\u0B85/g, "\u0BB1"); 
				text = text.replace(/\u0BB1\u0BCD\u0B86/g, "\u0BB1\u0BBE"); 
				text = text.replace(/\u0BB1\u0BCD\u0B85\u0B85/g, "\u0BB1\u0BBE"); 

				text = text.replace(/\u0BB1\u0B85/g, "\u0BB1\u0BBE");

				text = text.replace(/\u0BB1\u0BCD\u0B87/g, "\u0BB1\u0BBF");
				text = text.replace(/\u0BB1\u0BCD\u0B87\u0B87/g, "\u0BB1\u0BC0"); 
				text = text.replace(/\u0BB1\u0BCD\u0B88/g, "\u0BB1\u0BC0"); 

				text = text.replace(/\u0BB1\u0BBF\u0B87/g, "\u0BB1\u0BC0"); 

				text = text.replace(/\u0BB1\u0BCD\u0B89/g, "\u0BB1\u0BC1"); 
				text = text.replace(/\u0BB1\u0BCD\u0B89\u0B89/g, "\u0BB1\u0BC2"); 
				text = text.replace(/\u0BB1\u0BCD\u0B8A/g, "\u0BB1\u0BC2"); 

				text = text.replace(/\u0BB1\u0BC1\u0B89/g, "\u0BB1\u0BC2"); 

				text = text.replace(/\u0BB1\u0BCD\u0B8E/g, "\u0BB1\u0BC6"); 
				text = text.replace(/\u0BB1\u0BCD\u0B8E\u0B8E/g, "\u0BB1\u0BC7");
				text = text.replace(/\u0BB1\u0BCD\u0B8F/g, "\u0BB1\u0BC7"); 

				text = text.replace(/\u0BB1\u0BC6\u0B8E/g, "\u0BB1\u0BC7"); 

				text = text.replace(/\u0BB1\u0BCD\u0B90/g, "\u0BB1\u0BC8"); 

				text = text.replace(/\u0BB1\u0B87/g, "\u0BB1\u0BC8"); 

				text = text.replace(/\u0BB1\u0BCD\u0B92/g, "\u0BB1\u0BCA"); 
				text = text.replace(/\u0BB1\u0BCD\u0B92\u0B92/g, "\u0BB1\u0BCA"); 
				text = text.replace(/\u0BB1\u0BCD\u0B93/g, "\u0BB1\u0BCB"); 

				text = text.replace(/\u0BB1\u0BCA\u0B92/g, "\u0BB1\u0BCB"); 

				text = text.replace(/\u0BB1\u0BCD\u0B94/g, "\u0BB1\u0BCC"); 

				text = text.replace(/\u0BB1\u0B89/g, "\u0BB1\u0BCC"); 


				//na series

				//na series replacer
				
				text = text.replace(/\u0BA9\u0BCD\u0B85/g, "\u0BA9"); 
				text = text.replace(/\u0BA9\u0BCD\u0B86/g, "\u0BA9\u0BBE"); 
				text = text.replace(/\u0BA9\u0BCD\u0B85\u0B85/g, "\u0BA9\u0BBE"); 

				text = text.replace(/\u0BA9\u0B85/g, "\u0BA9\u0BBE");

				text = text.replace(/\u0BA9\u0BCD\u0B87/g, "\u0BA9\u0BBF");
				text = text.replace(/\u0BA9\u0BCD\u0B87\u0B87/g, "\u0BA9\u0BC0"); 
				text = text.replace(/\u0BA9\u0BCD\u0B88/g, "\u0BA9\u0BC0"); 

				text = text.replace(/\u0BA9\u0BBF\u0B87/g, "\u0BA9\u0BC0"); 

				text = text.replace(/\u0BA9\u0BCD\u0B89/g, "\u0BA9\u0BC1"); 
				text = text.replace(/\u0BA9\u0BCD\u0B89\u0B89/g, "\u0BA9\u0BC2"); 
				text = text.replace(/\u0BA9\u0BCD\u0B8A/g, "\u0BA9\u0BC2"); 

				text = text.replace(/\u0BA9\u0BC1\u0B89/g, "\u0BA9\u0BC2"); 

				text = text.replace(/\u0BA9\u0BCD\u0B8E/g, "\u0BA9\u0BC6"); 
				text = text.replace(/\u0BA9\u0BCD\u0B8E\u0B8E/g, "\u0BA9\u0BC7");
				text = text.replace(/\u0BA9\u0BCD\u0B8F/g, "\u0BA9\u0BC7"); 

				text = text.replace(/\u0BA9\u0BC6\u0B8E/g, "\u0BA9\u0BC7"); 

				text = text.replace(/\u0BA9\u0BCD\u0B90/g, "\u0BA9\u0BC8"); 

				text = text.replace(/\u0BA9\u0B87/g, "\u0BA9\u0BC8"); 

				text = text.replace(/\u0BA9\u0BCD\u0B92/g, "\u0BA9\u0BCA"); 
				text = text.replace(/\u0BA9\u0BCD\u0B92\u0B92/g, "\u0BA9\u0BCA"); 
				text = text.replace(/\u0BA9\u0BCD\u0B93/g, "\u0BA9\u0BCB"); 

				text = text.replace(/\u0BA9\u0BCA\u0B92/g, "\u0BA9\u0BCB"); 

				text = text.replace(/\u0BA9\u0BCD\u0B94/g, "\u0BA9\u0BCC"); 

				text = text.replace(/\u0BA9\u0B89/g, "\u0BA9\u0BCC"); 

				text = text.replace(/\u0B85\u0B87/g, "\u0B90"); 

				text = text.replace(/\u0B85\u0B89/g, "\u0B94"); 


				//ja series

				//ja series replacer
				
				text = text.replace(/\u0B9C\u0BCD\u0B85/g, "\u0B9C"); 
				text = text.replace(/\u0B9C\u0BCD\u0B86/g, "\u0B9C\u0BBE"); 
				text = text.replace(/\u0B9C\u0BCD\u0B85\u0B85/g, "\u0B9C\u0BBE"); 

				text = text.replace(/\u0B9C\u0B85/g, "\u0B9C\u0BBE");

				text = text.replace(/\u0B9C\u0BCD\u0B87/g, "\u0B9C\u0BBF");
				text = text.replace(/\u0B9C\u0BCD\u0B87\u0B87/g, "\u0B9C\u0BC0"); 
				text = text.replace(/\u0B9C\u0BCD\u0B88/g, "\u0B9C\u0BC0"); 

				text = text.replace(/\u0B9C\u0BBF\u0B87/g, "\u0B9C\u0BC0"); 

				text = text.replace(/\u0B9C\u0BCD\u0B89/g, "\u0B9C\u0BC1"); 
				text = text.replace(/\u0B9C\u0BCD\u0B89\u0B89/g, "\u0B9C\u0BC2"); 
				text = text.replace(/\u0B9C\u0BCD\u0B8A/g, "\u0B9C\u0BC2"); 

				text = text.replace(/\u0B9C\u0BC1\u0B89/g, "\u0B9C\u0BC2"); 

				text = text.replace(/\u0B9C\u0BCD\u0B8E/g, "\u0B9C\u0BC6"); 
				text = text.replace(/\u0B9C\u0BCD\u0B8E\u0B8E/g, "\u0B9C\u0BC7");
				text = text.replace(/\u0B9C\u0BCD\u0B8F/g, "\u0B9C\u0BC7"); 

				text = text.replace(/\u0B9C\u0BC6\u0B8E/g, "\u0B9C\u0BC7"); 

				text = text.replace(/\u0B9C\u0BCD\u0B90/g, "\u0B9C\u0BC8"); 

				text = text.replace(/\u0B9C\u0B87/g, "\u0B9C\u0BC8"); 

				text = text.replace(/\u0B9C\u0BCD\u0B92/g, "\u0B9C\u0BCA"); 
				text = text.replace(/\u0B9C\u0BCD\u0B92\u0B92/g, "\u0B9C\u0BCA"); 
				text = text.replace(/\u0B9C\u0BCD\u0B93/g, "\u0B9C\u0BCB"); 

				text = text.replace(/\u0B9C\u0BCA\u0B92/g, "\u0B9C\u0BCB"); 

				text = text.replace(/\u0B9C\u0BCD\u0B94/g, "\u0B9C\u0BCC"); 

				text = text.replace(/\u0B9C\u0B89/g, "\u0B9C\u0BCC"); 


				//Sa series

				//Sa series replacer
				
				text = text.replace(/\u0BB8\u0BCD\u0B85/g, "\u0BB8"); 
				text = text.replace(/\u0BB8\u0BCD\u0B86/g, "\u0BB8\u0BBE"); 
				text = text.replace(/\u0BB8\u0BCD\u0B85\u0B85/g, "\u0BB8\u0BBE"); 

				text = text.replace(/\u0BB8\u0B85/g, "\u0BB8\u0BBE");

				text = text.replace(/\u0BB8\u0BCD\u0B87/g, "\u0BB8\u0BBF");
				text = text.replace(/\u0BB8\u0BCD\u0B87\u0B87/g, "\u0BB8\u0BC0"); 
				text = text.replace(/\u0BB8\u0BCD\u0B88/g, "\u0BB8\u0BC0"); 

				text = text.replace(/\u0BB8\u0BBF\u0B87/g, "\u0BB8\u0BC0"); 

				text = text.replace(/\u0BB8\u0BCD\u0B89/g, "\u0BB8\u0BC1"); 
				text = text.replace(/\u0BB8\u0BCD\u0B89\u0B89/g, "\u0BB8\u0BC2"); 
				text = text.replace(/\u0BB8\u0BCD\u0B8A/g, "\u0BB8\u0BC2"); 

				text = text.replace(/\u0BB8\u0BC1\u0B89/g, "\u0BB8\u0BC2"); 

				text = text.replace(/\u0BB8\u0BCD\u0B8E/g, "\u0BB8\u0BC6"); 
				text = text.replace(/\u0BB8\u0BCD\u0B8E\u0B8E/g, "\u0BB8\u0BC7");
				text = text.replace(/\u0BB8\u0BCD\u0B8F/g, "\u0BB8\u0BC7"); 

				text = text.replace(/\u0BB8\u0BC6\u0B8E/g, "\u0BB8\u0BC7"); 

				text = text.replace(/\u0BB8\u0BCD\u0B90/g, "\u0BB8\u0BC8"); 

				text = text.replace(/\u0BB8\u0B87/g, "\u0BB8\u0BC8"); 

				text = text.replace(/\u0BB8\u0BCD\u0B92/g, "\u0BB8\u0BCA"); 
				text = text.replace(/\u0BB8\u0BCD\u0B92\u0B92/g, "\u0BB8\u0BCA"); 
				text = text.replace(/\u0BB8\u0BCD\u0B93/g, "\u0BB8\u0BCB"); 

				text = text.replace(/\u0BB8\u0BCA\u0B92/g, "\u0BB8\u0BCB"); 

				text = text.replace(/\u0BB8\u0BCD\u0B94/g, "\u0BB8\u0BCC"); 

				text = text.replace(/\u0BB8\u0B89/g, "\u0BB8\u0BCC"); 


				//Ca series

				//Ca series replacer
				
				text = text.replace(/\u0BB7\u0BCD\u0B85/g, "\u0BB7"); 
				text = text.replace(/\u0BB7\u0BCD\u0B86/g, "\u0BB7\u0BBE"); 
				text = text.replace(/\u0BB7\u0BCD\u0B85\u0B85/g, "\u0BB7\u0BBE"); 

				text = text.replace(/\u0BB7\u0B85/g, "\u0BB7\u0BBE");

				text = text.replace(/\u0BB7\u0BCD\u0B87/g, "\u0BB7\u0BBF");
				text = text.replace(/\u0BB7\u0BCD\u0B87\u0B87/g, "\u0BB7\u0BC0"); 
				text = text.replace(/\u0BB7\u0BCD\u0B88/g, "\u0BB7\u0BC0"); 

				text = text.replace(/\u0BB7\u0BBF\u0B87/g, "\u0BB7\u0BC0"); 

				text = text.replace(/\u0BB7\u0BCD\u0B89/g, "\u0BB7\u0BC1"); 
				text = text.replace(/\u0BB7\u0BCD\u0B89\u0B89/g, "\u0BB7\u0BC2"); 
				text = text.replace(/\u0BB7\u0BCD\u0B8A/g, "\u0BB7\u0BC2"); 

				text = text.replace(/\u0BB7\u0BC1\u0B89/g, "\u0BB7\u0BC2"); 

				text = text.replace(/\u0BB7\u0BCD\u0B8E/g, "\u0BB7\u0BC6"); 
				text = text.replace(/\u0BB7\u0BCD\u0B8E\u0B8E/g, "\u0BB7\u0BC7");
				text = text.replace(/\u0BB7\u0BCD\u0B8F/g, "\u0BB7\u0BC7"); 

				text = text.replace(/\u0BB7\u0BC6\u0B8E/g, "\u0BB7\u0BC7"); 

				text = text.replace(/\u0BB7\u0BCD\u0B90/g, "\u0BB7\u0BC8"); 

				text = text.replace(/\u0BB7\u0B87/g, "\u0BB7\u0BC8"); 

				text = text.replace(/\u0BB7\u0BCD\u0B92/g, "\u0BB7\u0BCA"); 
				text = text.replace(/\u0BB7\u0BCD\u0B92\u0B92/g, "\u0BB7\u0BCA"); 
				text = text.replace(/\u0BB7\u0BCD\u0B93/g, "\u0BB7\u0BCB"); 

				text = text.replace(/\u0BB7\u0BCA\u0B92/g, "\u0BB7\u0BCB"); 

				text = text.replace(/\u0BB7\u0BCD\u0B94/g, "\u0BB7\u0BCC"); 

				text = text.replace(/\u0BB7\u0B89/g, "\u0BB7\u0BCC"); 


				//ha series

				//ha series replacer
				
				text = text.replace(/\u0BB9\u0BCD\u0B85/g, "\u0BB9"); 
				text = text.replace(/\u0BB9\u0BCD\u0B86/g, "\u0BB9\u0BBE"); 
				text = text.replace(/\u0BB9\u0BCD\u0B85\u0B85/g, "\u0BB9\u0BBE"); 

				text = text.replace(/\u0BB9\u0B85/g, "\u0BB9\u0BBE");

				text = text.replace(/\u0BB9\u0BCD\u0B87/g, "\u0BB9\u0BBF");
				text = text.replace(/\u0BB9\u0BCD\u0B87\u0B87/g, "\u0BB9\u0BC0"); 
				text = text.replace(/\u0BB9\u0BCD\u0B88/g, "\u0BB9\u0BC0"); 

				text = text.replace(/\u0BB9\u0BBF\u0B87/g, "\u0BB9\u0BC0"); 

				text = text.replace(/\u0BB9\u0BCD\u0B89/g, "\u0BB9\u0BC1"); 
				text = text.replace(/\u0BB9\u0BCD\u0B89\u0B89/g, "\u0BB9\u0BC2"); 
				text = text.replace(/\u0BB9\u0BCD\u0B8A/g, "\u0BB9\u0BC2"); 

				text = text.replace(/\u0BB9\u0BC1\u0B89/g, "\u0BB9\u0BC2"); 

				text = text.replace(/\u0BB9\u0BCD\u0B8E/g, "\u0BB9\u0BC6"); 
				text = text.replace(/\u0BB9\u0BCD\u0B8E\u0B8E/g, "\u0BB9\u0BC7");
				text = text.replace(/\u0BB9\u0BCD\u0B8F/g, "\u0BB9\u0BC7"); 

				text = text.replace(/\u0BB9\u0BC6\u0B8E/g, "\u0BB9\u0BC7"); 

				text = text.replace(/\u0BB9\u0BCD\u0B90/g, "\u0BB9\u0BC8"); 

				text = text.replace(/\u0BB9\u0B87/g, "\u0BB9\u0BC8"); 

				text = text.replace(/\u0BB9\u0BCD\u0B92/g, "\u0BB9\u0BCA"); 
				text = text.replace(/\u0BB9\u0BCD\u0B92\u0B92/g, "\u0BB9\u0BCA"); 
				text = text.replace(/\u0BB9\u0BCD\u0B93/g, "\u0BB9\u0BCB"); 

				text = text.replace(/\u0BB9\u0BCA\u0B92/g, "\u0BB9\u0BCB"); 

				text = text.replace(/\u0BB9\u0BCD\u0B94/g, "\u0BB9\u0BCC"); 

				text = text.replace(/\u0BB9\u0B89/g, "\u0BB9\u0BCC"); 


			return text;
	}

}

function ta_phonetic_process (id,e) {
	
	var curChar = '';
	var text = '';

	var id = document.getElementById(id);	

	var value = id.value;
	text = value;

    var caretPos = getProceedingCaretPosition(id);
    var start = getSelectionStart(id);
    var end = getSelectionEnd(id);

    var word = proceedingWord(id.value, caretPos);
    if (word != null) {        
        var text1 = ta_phonetic_unicode(word);
		var text1 = ta_phonetic_combine_unicode(text1);		
		text = replaceTextOccurance(id, word, text1);			
    }


}