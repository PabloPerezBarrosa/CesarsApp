var mapValueStored = sessionStorage.getItem("mapValue");

    if(mapValueStored != null){
        document.getElementById("mpslt").src = "../images/" + mapValueStored +".png";
    }

var traduction = {"nemetus":"Nemetus","abydos":"Abydos","chernobog":"Chernobog","daishan":"Daishan","draxus":"Draxus",
        "absolucion":"Absolución","eden":"Edén","estigma":"Estigma","ningunlugar":"Ningunlugar","bannockburn":"Bannockburn","shaprut":"Shaprut",
        "kordeth":"Kordeth","aylon":"Aylon","de_moley":"De Moley","severus":"Severus","cadiz":"Cádiz","vril_ya":"Vril-Ya",
        "vau":"Vau","malignatius":"Malignatius","manitu":"Manitú","istakhr":"Istakhr","icono":"Icono","ungavorox":"Ungavorox",
        "criticorum":"Criticorum","cadavus":"Cadavus","hargard":"Hargard","leminkainen":"Leminkainen","kun_lun":"Kun Lun",
        "ravena":"Ravena","gwynneth":"Gwynneth","asphai":"Asphai","midian":"Midian","kish":"Kish","velisamil":"Velisamil",
        "byzantium_secundus":"Byzantium Secundus","pira":"Pira","madoc":"Madoc","ligahelm":"Ligahelm","terraplen":"Terraplén",
        "pandemonium":"Pandemonium","grial":"Grial","sadik_samar":"Sadik Samar","aragon":"Aragón","vera_cruz":"Vera Cruz",
        "sutek":"Sutek","hira":"Hira","tethys":"Tethys","delphi":"Delphi","pentateuco":"Pentateuco","terra_santa":"Terra Santa",
        "artemis":"Artemis","khayyam":"Khayyam","al_fashir":"Al Fashir","beliah":"Beliah","aspiracion":"Aspiración","irem":"Irem",
        "tsuma":"Tsuma","rukh":"Rukh","huevo":"Huevo","khotan":"Khotan","escarcha":"Escarcha","hemvald":"Hemvald",
        "lamento_del_lobo":"Lamento del Lobo","cuervo":"Cuervo","fingisvold":"Fingisvold","novgorod":"Novgorod","ferlon":"Ferlon",
        "niprabda":"Niprabda","fanelia":"Fanelia","avalon":"Avalon","utumno":"Utumno","sadik_samar":"Sadik Samar","mezexis":"Mezexis"};

        var originalImageWidth=1920,originalImageHeight=1080,originalCircleRadious = 45;

if(document.getElementById("mpslt").src.includes("4996")){

    var coordinates = {
        chernobog: {x:156, y:320},
        daishan: {x:366,y:330},
        absolucion:{x:174,y:421},
        estigma:{x:375,y:441},
        ningunlugar:{x:166,y:533},
        bannockburn:{x:538,y:339},
        aylon:{x:252,y:641},
        istakhr:{x:446,y:562},
        kordeth:{x:577,y:609},
        shaprut:{x:653,y:503},
        criticorum:{x:849,y:614},
        de_moley:{x:191,y:793},
        cadavus:{x:412,y:702},
        severus:{x:362,y:839},
        malignatius:{x:627,y:748},
        cadiz:{x:511,y:896},
        vril_ya:{x:231,y:928},
        vau:{x:647,y:1011},
        manitu:{x:793,y:992},
        asphai:{x:1255,y:1027},
        leminkainen:{x:809,y:271},
        gwynneth:{x:739,y:410},
        ravena:{x:861,y:386},
        velisamil:{x:882,y:483},
        delphi:{x:1264,y:330},
        pentateuco:{x:1405,y:267},
        terra_santa:{x:1609,y:350},
        artemis:{x:1755,y:305},
        byzantium_secundus:{x:1294,y:516},
        tethys:{x:1506,y:441},
        pira:{x:1137,y:604},
        madoc:{x:1313,y:731},
        ligahelm:{x:1426,y:815},
        ungavorox:{x:702,y:847},
        icono:{x:859,y:870},
        kish:{x:1096,y:792},
        midian:{x:1186,y:881},
        terraplen:{x:1484,y:915},
        pandemonium:{x:1601,y:1012},
        grial:{x:1637,y:811},
        aragon:{x:1494,y:663},
        vera_cruz:{x:1616,y:693},
        sutek:{x:1600,y:591},
        hira:{x:1708,y:657}
    }

    document.getElementById("mapaSalto").innerHTML = '<area shape="circle" coords="156,320,34" alt="Chernobog" class = "botones_mapa" id="chernobog">'+
                                                     '<area shape="circle" coords="366,330,34" alt="Daishan" class = "botones_mapa" id="daishan">'+
                                                     '<area shape="circle" coords="174,421,34" alt="Absolución" class = "botones_mapa" id="absolucion">'+
                                                     '<area shape="circle" coords="375,441,34" alt="Estigma" class = "botones_mapa" id="estigma">'+
                                                     '<area shape="circle" coords="166,533,34" alt="Ningunlugar" class = "botones_mapa" id="ningunlugar">'+
                                                     '<area shape="circle" coords="538,339,34" alt="Bannockburn" class = "botones_mapa" id="bannockburn">'+
                                                     '<area shape="circle" coords="252,641,34" alt="Aylon" class = "botones_mapa" id="aylon">'+
                                                     '<area shape="circle" coords="446,562,34" alt="Istakhr" class = "botones_mapa" id="istakhr">'+
                                                     '<area shape="circle" coords="577,609,34" alt="Kordeth" class = "botones_mapa" id="kordeth">'+
                                                     '<area shape="circle" coords="653,503,34" alt="Shaprut" class = "botones_mapa" id="shaprut">'+
                                                     '<area shape="circle" coords="849,614,34" alt="Criticorum" class = "botones_mapa" id="criticorum">'+
                                                     '<area shape="circle" coords="191,793,34" alt="De Moley" class = "botones_mapa" id="de_moley">'+
                                                     '<area shape="circle" coords="412,702,34" alt="Cadavus" class = "botones_mapa" id="cadavus">'+
                                                     '<area shape="circle" coords="362,839,34" alt="Severus" class = "botones_mapa" id="severus">'+
                                                     '<area shape="circle" coords="627,748,34" alt="Malignatius" class = "botones_mapa" id="malignatius">'+
                                                     '<area shape="circle" coords="511,896,34" alt="Cádiz" class = "botones_mapa" id="cadiz">'+
                                                     '<area shape="circle" coords="231,928,34" alt="Vril Ya" class = "botones_mapa" id="vril_ya">'+
                                                     '<area shape="circle" coords="647,1011,34" alt="Vau" class = "botones_mapa" id="vau">'+
                                                     '<area shape="circle" coords="793,992,34" alt="Manitú" class = "botones_mapa" id="manitu">'+
                                                     '<area shape="circle" coords="1255,1027,34" alt="Asphai" class = "botones_mapa" id="asphai">'+
                                                     '<area shape="circle" coords="809,271,34" alt="Leminkainen" class = "botones_mapa" id="leminkainen">'+
                                                     '<area shape="circle" coords="739,410,34" alt="Gwynneth" class = "botones_mapa" id="gwynneth">'+
                                                     '<area shape="circle" coords="861,386,34" alt="Ravena" class = "botones_mapa" id="ravena">'+
                                                     '<area shape="circle" coords="882,483,34" alt="Velisamil" class = "botones_mapa" id="velisamil">'+
                                                     '<area shape="circle" coords="1264,330,34" alt="Delphi" class = "botones_mapa" id="delphi">'+
                                                     '<area shape="circle" coords="1405,267,34" alt="Pentateuco" class = "botones_mapa" id="pentateuco">'+
                                                     '<area shape="circle" coords="1609,350,34" alt="Terra Santa" class = "botones_mapa" id="terra_santa">'+
                                                     '<area shape="circle" coords="1755,305,34" alt="Artemis" class = "botones_mapa" id="artemis">'+
                                                     '<area shape="circle" coords="1294,516,34" alt="Byzantium Secundus" class = "botones_mapa" id="byzantium_secundus">'+
                                                     '<area shape="circle" coords="1506,441,34" alt="Tethys" class = "botones_mapa" id="tethys">'+
                                                     '<area shape="circle" coords="1137,604,34" alt="Pira" class = "botones_mapa" id="pira">'+
                                                     '<area shape="circle" coords="1313,731,34" alt="Madoc" class = "botones_mapa" id="madoc">'+
                                                     '<area shape="circle" coords="1426,815,34" alt="Ligahelm" class = "botones_mapa" id="ligahelm">'+
                                                     '<area shape="circle" coords="702,847,34" alt="Ungavorox" class = "botones_mapa" id="ungavorox">'+
                                                     '<area shape="circle" coords="859,870,34" alt="Icono" class = "botones_mapa" id="icono">'+
                                                     '<area shape="circle" coords="1096,792,34" alt="Kish" class = "botones_mapa" id="kish">'+
                                                     '<area shape="circle" coords="1186,881,34" alt="Midian" class = "botones_mapa" id="midian">'+
                                                     '<area shape="circle" coords="1484,915,34" alt="Terraplen" class = "botones_mapa" id="terraplen">'+
                                                     '<area shape="circle" coords="1601,1012,34" alt="Pandemonium" class = "botones_mapa" id="pandemonium">'+
                                                     '<area shape="circle" coords="1637,811,34" alt="Grial" class = "botones_mapa" id="grial">'+
                                                     '<area shape="circle" coords="1494,663,34" alt="Aragón" class = "botones_mapa" id="aragon">'+
                                                     '<area shape="circle" coords="1616,693,34" alt="Vera Cruz" class = "botones_mapa" id="vera_cruz">'+
                                                     '<area shape="circle" coords="1600,591,34" alt="Sutek" class = "botones_mapa" id="sutek">'+
                                                     '<area shape="circle" coords="1708,657,34" alt="Hira" class = "botones_mapa" id="hira">';

    var chernobog = [["daishan","Daishan"],["absolucion","Absolución"],["estigma","Estigma"]],
        daishan = [["chernobog","Chernobog"],["absolucion","Absolución"],["estigma","Estigma"]],
        absolucion = [["chernobog","Chernobog"],["estigma","Estigma"],["daishan","Daishan"]],
        estigma = [["daishan","Daishan"],["absolucion","Absolución"],["chernobog","Chernobog"],["ningunlugar","Ningunlugar"],["bannockburn","Bannockburn"],["shaprut","Shaprut"]],
        ningunlugar =[["estigma","Estigma"]],
        bannockburn = [["estigma","Estigma"],["gwynneth","Gwynneth"]],
        shaprut = [["estigma","Estigma"],["criticorum","Criticorum"],["kordeth","Kordeth"]],
        kordeth = [["shaprut","Shaprut"],["criticorum","Criticorum"],["aylon","Aylon"]],
        aylon = [["de_moley","De Moley"],["kordeth","Kordeth"],["istakhr","Istakhr"],["leminkainen","Leminkainen"]],
        de_moley = [["aylon","Aylon"],["severus","Severus"]],
        severus = [["de_moley","De Moley"],["cadiz","Cádiz"],["cadavus","Cadavus"]],
        cadiz = [["severus","Severus"],["malignatius","Malignatius"],["manitu","Manitú"],["vril_ya","Vril-Ya"]],
        vril_ya = [["cadiz","Cádiz"],["vau","Vau"]],
        vau = [["vril_ya","Vril-Ya"],["manitu","Manitú"]],
        malignatius = [["cadavus","Cadavus"],["istakhr","Istakhr"],["kish","Kish"],["cadiz","Cádiz"]],
        manitu = [["vau","Vau"],["icono","Icono"],["asphai","Asphai"],["cadiz","Cádiz"]],
        istakhr = [["aylon","Aylon"],["malignatius","Malignatius"]],
        icono = [["manitu","Manitú"],["kish","Kish"],["ungavorox","Ungavorox"],["midian","Midian"]],
        ungavorox = [["icono","Icono"]],
        criticorum = [["cadavus","Cadavus"],["kordeth","Kordeth"],["shaprut","Shaprut"],["gwynneth","Gwynneth"],["byzantium_secundus","Byzantium Secundus"],["pira","Pira"],["kish","Kish"]],
        cadavus = [["criticorum","Criticorum"],["malignatius","Malignatius"],["severus","Severus"]],
        leminkainen = [["aylon","Aylon"],["ravena","Ravena"],["byzantium_secundus","Byzantium Secundus"]],
        ravena = [["gwynneth","Gwynneth"],["leminkainen","Leminkainen"],["delphi","Delphi"],["velisamil","Velisamil"]],
        gwynneth = [["bannockburn","Bannockburn"],["ravena","Ravena"],["criticorum","Criticorum"]],
        asphai = [["manitu","Manitú"],["midian","Midian"],["terraplen","Terraplén"],["pandemonium","Pandemonium"]],
        midian = [["icono","Icono"],["asphai","Asphai"],["ligahelm","Ligahelm"]],
        kish = [["terraplen","Terraplén"],["icono","Icono"],["malignatius","Malignatius"],["criticorum","Criticorum"]],
        velisamil = [["byzantium_secundus","Byzantium Secundus"],["ravena","Ravena"]],
        byzantium_secundus = [["leminkainen","Leminkainen"],["velisamil","Velisamil"],["criticorum","Criticorum"],["pira","Pira"],["madoc","Madoc"],["aragon","Aragón"],["sutek","Sutek"],["tethys","Tethys"],["pentateuco","Pentateuco"]],
        pira = [["byzantium_secundus","Byzantium Secundus"],["grial","Grial"],["criticorum","Criticorum"]],
        madoc = [["ligahelm","Ligahelm"],["byzantium_secundus","Byzantium Secundus"]],
        ligahelm = [["madoc","Madoc"],["aragon","Aragón"],["midian","Midian"]],
        terraplen = [["grial","Grial"],["pandemonium","Pandemonium"],["asphai","Asphai"],["kish","Kish"]],
        pandemonium = [["terraplen","Terraplén"],["asphai","Asphai"]],
        grial = [["terraplen","Terraplén"],["pira","Pira"]],
        aragon = [["ligahelm","Ligahelm"],["byzantium_secundus","Byzantium Secundus"],["vera_cruz","Vera Cruz"]],
        vera_cruz = [["aragon","Aragón"],["sutek","Sutek"],["hira","Hira"]],
        sutek = [["vera_cruz","Vera Cruz"],["byzantium_secundus","Byzantium Secundus"],["terra_santa","Terra Santa"]],
        hira = [["vera_cruz","Vera Cruz"]],
        tethys = [["byzantium_secundus","Byzantium Secundus"],["delphi","Delphi"]],
        delphi = [["tethys","Tethys"],["ravena","Ravena"],["pentateuco","Pentateuco"]],
        pentateuco = [["byzantium_secundus","Byzantium Secundus"],["delphi","Delphi"],["terra_santa","Terra Santa"]],
        terra_santa = [["sutek","Sutek"],["pentateuco","Pentateuco"],["artemis","Artemis"]],
        artemis = [["terra_santa","Terra Santa"]];

}else if(document.getElementById("mpslt").src.includes("5035b")){
    var coordinates = {
        chernobog: {x:156, y:320},
        daishan: {x:366,y:330},
        absolucion:{x:174,y:421},
        eden:{x:375,y:441},
        ningunlugar:{x:166,y:533},
        bannockburn:{x:538,y:339},
        aylon:{x:252,y:641},
        istakhr:{x:446,y:562},
        kordeth:{x:577,y:609},
        shaprut:{x:653,y:503},
        criticorum:{x:849,y:614},
        de_moley:{x:191,y:793},
        cadavus:{x:412,y:702},
        severus:{x:362,y:839},
        malignatius:{x:627,y:748},
        cadiz:{x:511,y:896},
        vril_ya:{x:231,y:928},
        vau:{x:647,y:1011},
        manitu:{x:793,y:992},
        asphai:{x:1255,y:1027},
        leminkainen:{x:809,y:271},
        gwynneth:{x:739,y:410},
        ravena:{x:861,y:386},
        velisamil:{x:882,y:483},
        delphi:{x:1264,y:330},
        pentateuco:{x:1405,y:267},
        terra_santa:{x:1609,y:350},
        artemis:{x:1755,y:305},
        byzantium_secundus:{x:1294,y:516},
        tethys:{x:1506,y:441},
        pira:{x:1137,y:604},
        madoc:{x:1313,y:731},
        ligahelm:{x:1426,y:815},
        ungavorox:{x:702,y:847},
        icono:{x:859,y:870},
        kish:{x:1096,y:792},
        midian:{x:1186,y:881},
        terraplen:{x:1484,y:915},
        pandemonium:{x:1601,y:1012},
        grial:{x:1637,y:811},
        aragon:{x:1494,y:663},
        vera_cruz:{x:1616,y:693},
        sutek:{x:1600,y:591},
        hira:{x:1708,y:657},
        nemetus:{x:86,y:197},
        abydos:{x:466,y:130},
        draxus:{x:467,y:247},
        hargard:{x:657,y:229},
        kun_lun:{x:1008,y:290},
        khotan:{x:914,y:169},
        escarcha:{x:1158,y:178},
        hemvald:{x:1323,y:189},
        lamento_del_lobo:{x:1039,y:53},
        cuervo:{x:758,y:97},
        fingisvold:{x:1281,y:54},
        novgorod:{x:1474,y:53},
        khayyam:{x:1823,y:760},
        al_fashir:{x:1825,y:578},
        beliah:{x:1826,y:425},
        aspiracion:{x:1703,y:479},
        irem:{x:1828,y:155},
        tsuma:{x:1756,y:64},
        rukh:{x:1685,y:155},
        huevo:{x:1546,y:153},
        ferlon:{x:78,y:74},
        niprabda:{x:229,y:73},
        fanelia:{x:106,y:705},
        avalon:{x:60,y:863},
        utumno:{x:111,y:993},
        sadik_samar:{x:1777,y:911},
        mezexis:{x:1196,y:714}
    }

    document.getElementById("mapaSalto").innerHTML = '<area shape="circle" coords="156,320,34" alt="Chernobog" class = "botones_mapa" id="chernobog">'+
                                                     '<area shape="circle" coords="366,330,34" alt="Daishan" class = "botones_mapa" id="daishan">'+
                                                     '<area shape="circle" coords="174,421,34" alt="Absolución" class = "botones_mapa" id="absolucion">'+
                                                     '<area shape="circle" coords="375,441,34" alt="Estigma" class = "botones_mapa" id="estigma">'+
                                                     '<area shape="circle" coords="166,533,34" alt="Ningunlugar" class = "botones_mapa" id="ningunlugar">'+
                                                     '<area shape="circle" coords="538,339,34" alt="Bannockburn" class = "botones_mapa" id="bannockburn">'+
                                                     '<area shape="circle" coords="252,641,34" alt="Aylon" class = "botones_mapa" id="aylon">'+
                                                     '<area shape="circle" coords="446,562,34" alt="Istakhr" class = "botones_mapa" id="istakhr">'+
                                                     '<area shape="circle" coords="577,609,34" alt="Kordeth" class = "botones_mapa" id="kordeth">'+
                                                     '<area shape="circle" coords="653,503,34" alt="Shaprut" class = "botones_mapa" id="shaprut">'+
                                                     '<area shape="circle" coords="849,614,34" alt="Criticorum" class = "botones_mapa" id="criticorum">'+
                                                     '<area shape="circle" coords="191,793,34" alt="De Moley" class = "botones_mapa" id="de_moley">'+
                                                     '<area shape="circle" coords="412,702,34" alt="Cadavus" class = "botones_mapa" id="cadavus">'+
                                                     '<area shape="circle" coords="362,839,34" alt="Severus" class = "botones_mapa" id="severus">'+
                                                     '<area shape="circle" coords="627,748,34" alt="Malignatius" class = "botones_mapa" id="malignatius">'+
                                                     '<area shape="circle" coords="511,896,34" alt="Cádiz" class = "botones_mapa" id="cadiz">'+
                                                     '<area shape="circle" coords="231,928,34" alt="Vril Ya" class = "botones_mapa" id="vril_ya">'+
                                                     '<area shape="circle" coords="647,1011,34" alt="Vau" class = "botones_mapa" id="vau">'+
                                                     '<area shape="circle" coords="793,992,34" alt="Manitú" class = "botones_mapa" id="manitu">'+
                                                     '<area shape="circle" coords="1255,1027,34" alt="Asphai" class = "botones_mapa" id="asphai">'+
                                                     '<area shape="circle" coords="809,271,34" alt="Leminkainen" class = "botones_mapa" id="leminkainen">'+
                                                     '<area shape="circle" coords="739,410,34" alt="Gwynneth" class = "botones_mapa" id="gwynneth">'+
                                                     '<area shape="circle" coords="861,386,34" alt="Ravena" class = "botones_mapa" id="ravena">'+
                                                     '<area shape="circle" coords="882,483,34" alt="Velisamil" class = "botones_mapa" id="velisamil">'+
                                                     '<area shape="circle" coords="1264,330,34" alt="Delphi" class = "botones_mapa" id="delphi">'+
                                                     '<area shape="circle" coords="1405,267,34" alt="Pentateuco" class = "botones_mapa" id="pentateuco">'+
                                                     '<area shape="circle" coords="1609,350,34" alt="Terra Santa" class = "botones_mapa" id="terra_santa">'+
                                                     '<area shape="circle" coords="1755,305,34" alt="Artemis" class = "botones_mapa" id="artemis">'+
                                                     '<area shape="circle" coords="1294,516,34" alt="Byzantium Secundus" class = "botones_mapa" id="byzantium_secundus">'+
                                                     '<area shape="circle" coords="1506,441,34" alt="Tethys" class = "botones_mapa" id="tethys">'+
                                                     '<area shape="circle" coords="1137,604,34" alt="Pira" class = "botones_mapa" id="pira">'+
                                                     '<area shape="circle" coords="1313,731,34" alt="Madoc" class = "botones_mapa" id="madoc">'+
                                                     '<area shape="circle" coords="1426,815,34" alt="Ligahelm" class = "botones_mapa" id="ligahelm">'+
                                                     '<area shape="circle" coords="702,847,34" alt="Ungavorox" class = "botones_mapa" id="ungavorox">'+
                                                     '<area shape="circle" coords="859,870,34" alt="Icono" class = "botones_mapa" id="icono">'+
                                                     '<area shape="circle" coords="1096,792,34" alt="Kish" class = "botones_mapa" id="kish">'+
                                                     '<area shape="circle" coords="1186,881,34" alt="Midian" class = "botones_mapa" id="midian">'+
                                                     '<area shape="circle" coords="1484,915,34" alt="Terraplen" class = "botones_mapa" id="terraplen">'+
                                                     '<area shape="circle" coords="1601,1012,34" alt="Pandemonium" class = "botones_mapa" id="pandemonium">'+
                                                     '<area shape="circle" coords="1637,811,34" alt="Grial" class = "botones_mapa" id="grial">'+
                                                     '<area shape="circle" coords="1494,663,34" alt="Aragón" class = "botones_mapa" id="aragon">'+
                                                     '<area shape="circle" coords="1616,693,34" alt="Vera Cruz" class = "botones_mapa" id="vera_cruz">'+
                                                     '<area shape="circle" coords="1600,591,34" alt="Sutek" class = "botones_mapa" id="sutek">'+
                                                     '<area shape="circle" coords="1708,657,34" alt="Hira" class = "botones_mapa" id="hira">'+
                                                     '<area shape="circle" coords="86,197,34" alt="Nemetus" class = "botones_mapa" id="nemetus">'+
                                                     '<area shape="circle" coords="466,130,34" alt="Abydos" class = "botones_mapa" id="abydos">'+
                                                     '<area shape="circle" coords="467,247,34" alt="Draxus" class = "botones_mapa" id="draxus">'+
                                                     '<area shape="circle" coords="657,229,34" alt="Hargard" class = "botones_mapa" id="hargard">'+
                                                     '<area shape="circle" coords="1008,290,34" alt="Kun Lun" class = "botones_mapa" id="kun_lun">'+
                                                     '<area shape="circle" coords="914,169,34" alt="Khotan" class = "botones_mapa" id="khotan">'+
                                                     '<area shape="circle" coords="1158,178,34" alt="Escarcha" class = "botones_mapa" id="escarcha">'+
                                                     '<area shape="circle" coords="1323,189,34" alt="Hemvald" class = "botones_mapa" id="hemvald">'+
                                                     '<area shape="circle" coords="1039,53,34" alt="Lamento del Lobo" class = "botones_mapa" id="lamento_del_lobo">'+
                                                     '<area shape="circle" coords="758,97,34" alt="Cuervo" class = "botones_mapa" id="cuervo">'+
                                                     '<area shape="circle" coords="1281,54,34" alt="Fingisvold" class = "botones_mapa" id="fingisvold">'+
                                                     '<area shape="circle" coords="1474,53,34" alt="Novgorod" class = "botones_mapa" id="novgorod">'+
                                                     '<area shape="circle" coords="1823,760,34" alt="Khayyam" class = "botones_mapa" id="khayyam">'+
                                                     '<area shape="circle" coords="1825,578,34" alt="Al Fashir" class = "botones_mapa" id="al_fashir">'+
                                                     '<area shape="circle" coords="1826,425,34" alt="Beliah" class = "botones_mapa" id="beliah">'+
                                                     '<area shape="circle" coords="1703,479,34" alt="Aspiración" class = "botones_mapa" id="aspiracion">'+
                                                     '<area shape="circle" coords="1828,155,34" alt="Irem" class = "botones_mapa" id="irem">'+
                                                     '<area shape="circle" coords="1756,64,34" alt="Tsuma" class = "botones_mapa" id="tsuma">'+
                                                     '<area shape="circle" coords="1685,155,34" alt="Rukh" class = "botones_mapa" id="rukh">'+
                                                     '<area shape="circle" coords="1546,153,34" alt="Huevo" class = "botones_mapa" id="huevo">'+
                                                     '<area shape="circle" coords="78,74,34" alt="Ferlon" class = "botones_mapa" id="ferlon">'+
                                                     '<area shape="circle" coords="229,73,34" alt="Niprabda" class = "botones_mapa" id="niprabda">'+
                                                     '<area shape="circle" coords="106,705,34" alt="Fanelia" class = "botones_mapa" id="fanelia">'+
                                                     '<area shape="circle" coords="60,863,34" alt="Avalon" class = "botones_mapa" id="avalon">'+
                                                     '<area shape="circle" coords="111,993,34" alt="Utumno" class = "botones_mapa" id="utumno">'+
                                                     '<area shape="circle" coords="1196,714,34" alt="Mezexis" class = "botones_mapa" id="mezexis">'+
                                                     '<area shape="circle" coords="1777,911,34" alt="Sadik Samar" class = "botones_mapa" id="sadik_samar">';

        var nemetus = [["abydos","Abydos"],["ferlon","Ferlon"]],
            abydos = [["nemetus","Nemetus"],["chernobog","Chernobog"],["hargard","Hargard"]],
            chernobog = [["abydos","Abydos"],["daishan","Daishan"],["absolucion","Absolución"],["eden","Edén"]],
            daishan = [["chernobog","Chernobog"],["absolucion","Absolución"],["eden","Edén"],["draxus","Draxus"]],
            draxus = [["daishan","Daishan"]],
            absolucion = [["chernobog","Chernobog"],["eden","Edén"],["daishan","Daishan"]],
            eden = [["daishan","Daishan"],["absolucion","Absolución"],["chernobog","Chernobog"],["ningunlugar","Ningunlugar"],["bannockburn","Bannockburn"],["shaprut","Shaprut"]],
            ningunlugar =[["eden","Edén"]],
            bannockburn = [["eden","Edén"],["gwynneth","Gwynneth"]],
            shaprut = [["eden","Edén"],["criticorum","Criticorum"],["kordeth","Kordeth"]],
            kordeth = [["shaprut","Shaprut"],["criticorum","Criticorum"],["aylon","Aylon"]],
            aylon = [["de_moley","De Moley"],["kordeth","Kordeth"],["istakhr","Istakhr"],["leminkainen","Leminkainen"]],
            de_moley = [["aylon","Aylon"],["severus","Severus"]],
            severus = [["de_moley","De Moley"],["cadiz","Cádiz"],["cadavus","Cadavus"]],
            cadiz = [["severus","Severus"],["malignatius","Malignatius"],["manitu","Manitú"],["vril_ya","Vril-Ya"]],
            vril_ya = [["cadiz","Cádiz"],["vau","Vau"]],
            vau = [["vril_ya","Vril-Ya"],["manitu","Manitú"]],
            malignatius = [["cadavus","Cadavus"],["istakhr","Istakhr"],["kish","Kish"],["cadiz","Cádiz"]],
            manitu = [["vau","Vau"],["icono","Icono"],["asphai","Asphai"],["cadiz","Cádiz"]],
            istakhr = [["aylon","Aylon"],["malignatius","Malignatius"]],
            icono = [["manitu","Manitú"],["kish","Kish"],["ungavorox","Ungavorox"],["midian","Midian"]],
            ungavorox = [["icono","Icono"]],
            criticorum = [["cadavus","Cadavus"],["kordeth","Kordeth"],["shaprut","Shaprut"],["gwynneth","Gwynneth"],["byzantium_secundus","Byzantium Secundus"],["pira","Pira"],["kish","Kish"]],
            cadavus = [["criticorum","Criticorum"],["malignatius","Malignatius"],["severus","Severus"],["fanelia","Fanelia"]],
            hargard = [["abydos","Abydos"],["leminkainen","Leminkainen"],["khotan","Khotan"]],
            leminkainen = [["aylon","Aylon"],["hargard","Hargard"],["kun_lun","Kun Lun"],["ravena","Ravena"],["byzantium_secundus","Byzantium Secundus"]],
            kun_lun = [["leminkainen","Leminkainen"]],
            ravena = [["gwynneth","Gwynneth"],["leminkainen","Leminkainen"],["delphi","Delphi"],["velisamil","Velisamil"]],
            gwynneth = [["bannockburn","Bannockburn"],["ravena","Ravena"],["criticorum","Criticorum"]],
            asphai = [["manitu","Manitú"],["midian","Midian"],["terraplen","Terraplén"],["pandemonium","Pandemonium"]],
            midian = [["icono","Icono"],["asphai","Asphai"],["ligahelm","Ligahelm"]],
            kish = [["terraplen","Terraplén"],["icono","Icono"],["malignatius","Malignatius"],["criticorum","Criticorum"],["mezexis","Mezexis"]],
            velisamil = [["byzantium_secundus","Byzantium Secundus"],["ravena","Ravena"]],
            byzantium_secundus = [["leminkainen","Leminkainen"],["velisamil","Velisamil"],["criticorum","Criticorum"],["pira","Pira"],["madoc","Madoc"],["aragon","Aragón"],["sutek","Sutek"],["tethys","Tethys"],["pentateuco","Pentateuco"]],
            pira = [["byzantium_secundus","Byzantium Secundus"],["grial","Grial"],["criticorum","Criticorum"]],
            madoc = [["ligahelm","Ligahelm"],["byzantium_secundus","Byzantium Secundus"]],
            ligahelm = [["madoc","Madoc"],["aragon","Aragón"],["midian","Midian"]],
            terraplen = [["grial","Grial"],["pandemonium","Pandemonium"],["asphai","Asphai"],["kish","Kish"]],
            pandemonium = [["terraplen","Terraplén"],["asphai","Asphai"]],
            grial = [["terraplen","Terraplén"],["pira","Pira"],["sadik_samar","Sadik Samar"]],
            aragon = [["ligahelm","Ligahelm"],["byzantium_secundus","Byzantium Secundus"],["vera_cruz","Vera Cruz"]],
            vera_cruz = [["aragon","Aragón"],["sutek","Sutek"],["hira","Hira"]],
            sutek = [["vera_cruz","Vera Cruz"],["byzantium_secundus","Byzantium Secundus"],["terra_santa","Terra Santa"]],
            hira = [["vera_cruz","Vera Cruz"],["khayyam","Khayyam"]],
            tethys = [["byzantium_secundus","Byzantium Secundus"],["delphi","Delphi"]],
            delphi = [["tethys","Tethys"],["ravena","Ravena"],["pentateuco","Pentateuco"]],
            pentateuco = [["byzantium_secundus","Byzantium Secundus"],["delphi","Delphi"],["terra_santa","Terra Santa"]],
            terra_santa = [["sutek","Sutek"],["pentateuco","Pentateuco"],["artemis","Artemis"]],
            artemis = [["terra_santa","Terra Santa"]],
            khayyam = [["hira","Hira"],["al_fashir","Al Fashir"]],
            al_fashir = [["khayyam","Khayyam"],["beliah","Beliah"]],
            beliah = [["al_fashir","Al Fashir"],["aspiracion","Aspiración"],["irem","Irem"]],
            aspiracion = [["beliah","Beliah"]],
            irem = [["beliah","Beliah"],["tsuma","Tsuma"],["rukh","Rukh"]],
            tsuma = [["irem","Irem"]],
            rukh = [["irem","Irem"],["huevo","Huevo"]],
            huevo = [["rukh","Rukh"]],
            khotan = [["hargard","Hargard"],["escarcha","Escarcha"]],
            escarcha = [["khotan","Khotan"],["hemvald","Hemvald"],["lamento_del_lobo","Lamento del Lobo"]],
            hemvald = [["escarcha","Escarcha"]],
            lamento_del_lobo = [["escarcha","Escarcha"],["cuervo","Cuervo"],["fingisvold","Fingisvold"]],
            cuervo = [["lamento_del_lobo","Lamento del Lobo"]],
            fingisvold = [["lamento_del_lobo","Lamento del Lobo"],["novgorod","Novgorod"]],
            novgorod = [["fingisvold","Fingisvold"]],
            sadik_samar = [["grial","Grial"]],
            fanelia = [["cadavus","Cadavus"],["avalon","Avalon"],["utumno","Utumno"]],
            avalon = [["fanelia","Fanelia"]],
            utumno = [["fanelia","Fanelia"]],
            ferlon = [["nemetus","Nemetus"],["niprabda","Niprabda"]]
            niprabda = [["ferlon","Ferlon"]],
            mezexis = [["kish","Kish"]];
}else if(document.getElementById("mpslt").src.includes("5035")){

    var coordinates = {
        chernobog: {x:156, y:320},
        daishan: {x:366,y:330},
        absolucion:{x:174,y:421},
        eden:{x:375,y:441},
        ningunlugar:{x:166,y:533},
        bannockburn:{x:538,y:339},
        aylon:{x:252,y:641},
        istakhr:{x:446,y:562},
        kordeth:{x:577,y:609},
        shaprut:{x:653,y:503},
        criticorum:{x:849,y:614},
        de_moley:{x:191,y:793},
        cadavus:{x:412,y:702},
        severus:{x:362,y:839},
        malignatius:{x:627,y:748},
        cadiz:{x:511,y:896},
        vril_ya:{x:231,y:928},
        vau:{x:647,y:1011},
        manitu:{x:793,y:992},
        asphai:{x:1255,y:1027},
        leminkainen:{x:809,y:271},
        gwynneth:{x:739,y:410},
        ravena:{x:861,y:386},
        velisamil:{x:882,y:483},
        delphi:{x:1264,y:330},
        pentateuco:{x:1405,y:267},
        terra_santa:{x:1609,y:350},
        artemis:{x:1755,y:305},
        byzantium_secundus:{x:1294,y:516},
        tethys:{x:1506,y:441},
        pira:{x:1137,y:604},
        madoc:{x:1313,y:731},
        ligahelm:{x:1426,y:815},
        ungavorox:{x:702,y:847},
        icono:{x:859,y:870},
        kish:{x:1096,y:792},
        midian:{x:1186,y:881},
        terraplen:{x:1484,y:915},
        pandemonium:{x:1601,y:1012},
        grial:{x:1637,y:811},
        aragon:{x:1494,y:663},
        vera_cruz:{x:1616,y:693},
        sutek:{x:1600,y:591},
        hira:{x:1708,y:657},
        nemetus:{x:86,y:197},
        abydos:{x:466,y:130},
        draxus:{x:467,y:247},
        hargard:{x:657,y:229},
        kun_lun:{x:1008,y:290},
        khotan:{x:914,y:169},
        escarcha:{x:1158,y:178},
        hemvald:{x:1323,y:189},
        lamento_del_lobo:{x:1039,y:53},
        cuervo:{x:758,y:97},
        fingisvold:{x:1281,y:54},
        novgorod:{x:1474,y:53},
        khayyam:{x:1823,y:760},
        al_fashir:{x:1825,y:578},
        beliah:{x:1826,y:425},
        aspiracion:{x:1703,y:479},
        irem:{x:1828,y:155},
        tsuma:{x:1756,y:64},
        rukh:{x:1685,y:155},
        huevo:{x:1546,y:153}
    }

    document.getElementById("mapaSalto").innerHTML = '<area shape="circle" coords="156,320,34" alt="Chernobog" class = "botones_mapa" id="chernobog">'+
                                                     '<area shape="circle" coords="366,330,34" alt="Daishan" class = "botones_mapa" id="daishan">'+
                                                     '<area shape="circle" coords="174,421,34" alt="Absolución" class = "botones_mapa" id="absolucion">'+
                                                     '<area shape="circle" coords="375,441,34" alt="Estigma" class = "botones_mapa" id="estigma">'+
                                                     '<area shape="circle" coords="166,533,34" alt="Ningunlugar" class = "botones_mapa" id="ningunlugar">'+
                                                     '<area shape="circle" coords="538,339,34" alt="Bannockburn" class = "botones_mapa" id="bannockburn">'+
                                                     '<area shape="circle" coords="252,641,34" alt="Aylon" class = "botones_mapa" id="aylon">'+
                                                     '<area shape="circle" coords="446,562,34" alt="Istakhr" class = "botones_mapa" id="istakhr">'+
                                                     '<area shape="circle" coords="577,609,34" alt="Kordeth" class = "botones_mapa" id="kordeth">'+
                                                     '<area shape="circle" coords="653,503,34" alt="Shaprut" class = "botones_mapa" id="shaprut">'+
                                                     '<area shape="circle" coords="849,614,34" alt="Criticorum" class = "botones_mapa" id="criticorum">'+
                                                     '<area shape="circle" coords="191,793,34" alt="De Moley" class = "botones_mapa" id="de_moley">'+
                                                     '<area shape="circle" coords="412,702,34" alt="Cadavus" class = "botones_mapa" id="cadavus">'+
                                                     '<area shape="circle" coords="362,839,34" alt="Severus" class = "botones_mapa" id="severus">'+
                                                     '<area shape="circle" coords="627,748,34" alt="Malignatius" class = "botones_mapa" id="malignatius">'+
                                                     '<area shape="circle" coords="511,896,34" alt="Cádiz" class = "botones_mapa" id="cadiz">'+
                                                     '<area shape="circle" coords="231,928,34" alt="Vril Ya" class = "botones_mapa" id="vril_ya">'+
                                                     '<area shape="circle" coords="647,1011,34" alt="Vau" class = "botones_mapa" id="vau">'+
                                                     '<area shape="circle" coords="793,992,34" alt="Manitú" class = "botones_mapa" id="manitu">'+
                                                     '<area shape="circle" coords="1255,1027,34" alt="Asphai" class = "botones_mapa" id="asphai">'+
                                                     '<area shape="circle" coords="809,271,34" alt="Leminkainen" class = "botones_mapa" id="leminkainen">'+
                                                     '<area shape="circle" coords="739,410,34" alt="Gwynneth" class = "botones_mapa" id="gwynneth">'+
                                                     '<area shape="circle" coords="861,386,34" alt="Ravena" class = "botones_mapa" id="ravena">'+
                                                     '<area shape="circle" coords="882,483,34" alt="Velisamil" class = "botones_mapa" id="velisamil">'+
                                                     '<area shape="circle" coords="1264,330,34" alt="Delphi" class = "botones_mapa" id="delphi">'+
                                                     '<area shape="circle" coords="1405,267,34" alt="Pentateuco" class = "botones_mapa" id="pentateuco">'+
                                                     '<area shape="circle" coords="1609,350,34" alt="Terra Santa" class = "botones_mapa" id="terra_santa">'+
                                                     '<area shape="circle" coords="1755,305,34" alt="Artemis" class = "botones_mapa" id="artemis">'+
                                                     '<area shape="circle" coords="1294,516,34" alt="Byzantium Secundus" class = "botones_mapa" id="byzantium_secundus">'+
                                                     '<area shape="circle" coords="1506,441,34" alt="Tethys" class = "botones_mapa" id="tethys">'+
                                                     '<area shape="circle" coords="1137,604,34" alt="Pira" class = "botones_mapa" id="pira">'+
                                                     '<area shape="circle" coords="1313,731,34" alt="Madoc" class = "botones_mapa" id="madoc">'+
                                                     '<area shape="circle" coords="1426,815,34" alt="Ligahelm" class = "botones_mapa" id="ligahelm">'+
                                                     '<area shape="circle" coords="702,847,34" alt="Ungavorox" class = "botones_mapa" id="ungavorox">'+
                                                     '<area shape="circle" coords="859,870,34" alt="Icono" class = "botones_mapa" id="icono">'+
                                                     '<area shape="circle" coords="1096,792,34" alt="Kish" class = "botones_mapa" id="kish">'+
                                                     '<area shape="circle" coords="1186,881,34" alt="Midian" class = "botones_mapa" id="midian">'+
                                                     '<area shape="circle" coords="1484,915,34" alt="Terraplen" class = "botones_mapa" id="terraplen">'+
                                                     '<area shape="circle" coords="1601,1012,34" alt="Pandemonium" class = "botones_mapa" id="pandemonium">'+
                                                     '<area shape="circle" coords="1637,811,34" alt="Grial" class = "botones_mapa" id="grial">'+
                                                     '<area shape="circle" coords="1494,663,34" alt="Aragón" class = "botones_mapa" id="aragon">'+
                                                     '<area shape="circle" coords="1616,693,34" alt="Vera Cruz" class = "botones_mapa" id="vera_cruz">'+
                                                     '<area shape="circle" coords="1600,591,34" alt="Sutek" class = "botones_mapa" id="sutek">'+
                                                     '<area shape="circle" coords="1708,657,34" alt="Hira" class = "botones_mapa" id="hira">'+
                                                     '<area shape="circle" coords="86,197,34" alt="Nemetus" class = "botones_mapa" id="nemetus">'+
                                                     '<area shape="circle" coords="466,130,34" alt="Abydos" class = "botones_mapa" id="abydos">'+
                                                     '<area shape="circle" coords="467,247,34" alt="Draxus" class = "botones_mapa" id="draxus">'+
                                                     '<area shape="circle" coords="657,229,34" alt="Hargard" class = "botones_mapa" id="hargard">'+
                                                     '<area shape="circle" coords="1008,290,34" alt="Kun Lun" class = "botones_mapa" id="kun_lun">'+
                                                     '<area shape="circle" coords="914,169,34" alt="Khotan" class = "botones_mapa" id="khotan">'+
                                                     '<area shape="circle" coords="1158,178,34" alt="Escarcha" class = "botones_mapa" id="escarcha">'+
                                                     '<area shape="circle" coords="1323,189,34" alt="Hemvald" class = "botones_mapa" id="hemvald">'+
                                                     '<area shape="circle" coords="1039,53,34" alt="Lamento del Lobo" class = "botones_mapa" id="lamento_del_lobo">'+
                                                     '<area shape="circle" coords="758,97,34" alt="Cuervo" class = "botones_mapa" id="cuervo">'+
                                                     '<area shape="circle" coords="1281,54,34" alt="Fingisvold" class = "botones_mapa" id="fingisvold">'+
                                                     '<area shape="circle" coords="1474,53,34" alt="Novgorod" class = "botones_mapa" id="novgorod">'+
                                                     '<area shape="circle" coords="1823,760,34" alt="Khayyam" class = "botones_mapa" id="khayyam">'+
                                                     '<area shape="circle" coords="1825,578,34" alt="Al Fashir" class = "botones_mapa" id="al_fashir">'+
                                                     '<area shape="circle" coords="1826,425,34" alt="Beliah" class = "botones_mapa" id="beliah">'+
                                                     '<area shape="circle" coords="1703,479,34" alt="Aspiración" class = "botones_mapa" id="aspiracion">'+
                                                     '<area shape="circle" coords="1828,155,34" alt="Irem" class = "botones_mapa" id="irem">'+
                                                     '<area shape="circle" coords="1756,64,34" alt="Tsuma" class = "botones_mapa" id="tsuma">'+
                                                     '<area shape="circle" coords="1685,155,34" alt="Rukh" class = "botones_mapa" id="rukh">'+
                                                     '<area shape="circle" coords="1546,153,34" alt="Huevo" class = "botones_mapa" id="huevo">';

    var nemetus = [["abydos","Abydos"]],
        abydos = [["nemetus","Nemetus"],["chernobog","Chernobog"],["hargard","Hargard"]],
        chernobog = [["abydos","Abydos"],["daishan","Daishan"],["absolucion","Absolución"],["eden","Edén"]],
        daishan = [["chernobog","Chernobog"],["absolucion","Absolución"],["eden","Edén"],["draxus","Draxus"]],
        draxus = [["daishan","Daishan"]],
        absolucion = [["chernobog","Chernobog"],["eden","Edén"],["daishan","Daishan"]],
        eden = [["daishan","Daishan"],["absolucion","Absolución"],["chernobog","Chernobog"],["ningunlugar","Ningunlugar"],["bannockburn","Bannockburn"],["shaprut","Shaprut"]],
        ningunlugar =[["eden","Edén"]],
        bannockburn = [["eden","Edén"],["gwynneth","Gwynneth"]],
        shaprut = [["eden","Edén"],["criticorum","Criticorum"],["kordeth","Kordeth"]],
        kordeth = [["shaprut","Shaprut"],["criticorum","Criticorum"],["aylon","Aylon"]],
        aylon = [["de_moley","De Moley"],["kordeth","Kordeth"],["istakhr","Istakhr"],["leminkainen","Leminkainen"]],
        de_moley = [["aylon","Aylon"],["severus","Severus"]],
        severus = [["de_moley","De Moley"],["cadiz","Cádiz"],["cadavus","Cadavus"]],
        cadiz = [["severus","Severus"],["malignatius","Malignatius"],["manitu","Manitú"],["vril_ya","Vril-Ya"]],
        vril_ya = [["cadiz","Cádiz"],["vau","Vau"]],
        vau = [["vril_ya","Vril-Ya"],["manitu","Manitú"]],
        malignatius = [["cadavus","Cadavus"],["istakhr","Istakhr"],["kish","Kish"],["cadiz","Cádiz"]],
        manitu = [["vau","Vau"],["icono","Icono"],["asphai","Asphai"],["cadiz","Cádiz"]],
        istakhr = [["aylon","Aylon"],["malignatius","Malignatius"]],
        icono = [["manitu","Manitú"],["kish","Kish"],["ungavorox","Ungavorox"],["midian","Midian"]],
        ungavorox = [["icono","Icono"]],
        criticorum = [["cadavus","Cadavus"],["kordeth","Kordeth"],["shaprut","Shaprut"],["gwynneth","Gwynneth"],["byzantium_secundus","Byzantium Secundus"],["pira","Pira"],["kish","Kish"]],
        cadavus = [["criticorum","Criticorum"],["malignatius","Malignatius"],["severus","Severus"]],
        hargard = [["abydos","Abydos"],["leminkainen","Leminkainen"],["khotan","Khotan"]],
        leminkainen = [["aylon","Aylon"],["hargard","Hargard"],["kun_lun","Kun Lun"],["ravena","Ravena"],["byzantium_secundus","Byzantium Secundus"]],
        kun_lun = [["leminkainen","Leminkainen"]],
        ravena = [["gwynneth","Gwynneth"],["leminkainen","Leminkainen"],["delphi","Delphi"],["velisamil","Velisamil"]],
        gwynneth = [["bannockburn","Bannockburn"],["ravena","Ravena"],["criticorum","Criticorum"]],
        asphai = [["manitu","Manitú"],["midian","Midian"],["terraplen","Terraplén"],["pandemonium","Pandemonium"]],
        midian = [["icono","Icono"],["asphai","Asphai"],["ligahelm","Ligahelm"]],
        kish = [["terraplen","Terraplén"],["icono","Icono"],["malignatius","Malignatius"],["criticorum","Criticorum"]],
        velisamil = [["byzantium_secundus","Byzantium Secundus"],["ravena","Ravena"]],
        byzantium_secundus = [["leminkainen","Leminkainen"],["velisamil","Velisamil"],["criticorum","Criticorum"],["pira","Pira"],["madoc","Madoc"],["aragon","Aragón"],["sutek","Sutek"],["tethys","Tethys"],["pentateuco","Pentateuco"]],
        pira = [["byzantium_secundus","Byzantium Secundus"],["grial","Grial"],["criticorum","Criticorum"]],
        madoc = [["ligahelm","Ligahelm"],["byzantium_secundus","Byzantium Secundus"]],
        ligahelm = [["madoc","Madoc"],["aragon","Aragón"],["midian","Midian"]],
        terraplen = [["grial","Grial"],["pandemonium","Pandemonium"],["asphai","Asphai"],["kish","Kish"]],
        pandemonium = [["terraplen","Terraplén"],["asphai","Asphai"]],
        grial = [["terraplen","Terraplén"],["pira","Pira"]],
        aragon = [["ligahelm","Ligahelm"],["byzantium_secundus","Byzantium Secundus"],["vera_cruz","Vera Cruz"]],
        vera_cruz = [["aragon","Aragón"],["sutek","Sutek"],["hira","Hira"]],
        sutek = [["vera_cruz","Vera Cruz"],["byzantium_secundus","Byzantium Secundus"],["terra_santa","Terra Santa"]],
        hira = [["vera_cruz","Vera Cruz"],["khayyam","Khayyam"]],
        tethys = [["byzantium_secundus","Byzantium Secundus"],["delphi","Delphi"]],
        delphi = [["tethys","Tethys"],["ravena","Ravena"],["pentateuco","Pentateuco"]],
        pentateuco = [["byzantium_secundus","Byzantium Secundus"],["delphi","Delphi"],["terra_santa","Terra Santa"]],
        terra_santa = [["sutek","Sutek"],["pentateuco","Pentateuco"],["artemis","Artemis"]],
        artemis = [["terra_santa","Terra Santa"]],
        khayyam = [["hira","Hira"],["al_fashir","Al Fashir"]],
        al_fashir = [["khayyam","Khayyam"],["beliah","Beliah"]],
        beliah = [["al_fashir","Al Fashir"],["aspiracion","Aspiración"],["irem","Irem"]],
        aspiracion = [["beliah","Beliah"]],
        irem = [["beliah","Beliah"],["tsuma","Tsuma"],["rukh","Rukh"]],
        tsuma = [["irem","Irem"]],
        rukh = [["irem","Irem"],["huevo","Huevo"]],
        huevo = [["rukh","Rukh"]],
        khotan = [["hargard","Hargard"],["escarcha","Escarcha"]],
        escarcha = [["khotan","Khotan"],["hemvald","Hemvald"],["lamento_del_lobo","Lamento del Lobo"]],
        hemvald = [["escarcha","Escarcha"]],
        lamento_del_lobo = [["escarcha","Escarcha"],["cuervo","Cuervo"],["fingisvold","Fingisvold"]],
        cuervo = [["lamento_del_lobo","Lamento del Lobo"]],
        fingisvold = [["lamento_del_lobo","Lamento del Lobo"],["novgorod","Novgorod"]],
        novgorod = [["fingisvold","Fingisvold"]];


}
