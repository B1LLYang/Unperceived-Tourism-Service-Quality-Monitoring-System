function initMap(result) {
    var longiDis, lagiDis, cityNames;
    longiDis = result.center.lng;
    lagiDis = result.center.lat;
    //获取当前城市名
    cityNames = '长春';
    console.log("IP 定位城市:" + cityNames + "   经度" + result.center.lng + "   纬度" + result.center.lat);
    // 创建地图实例
    var map = new BMap.Map("map_b");
    var point = new BMap.Point(116.418261, 39.921984);
    map.centerAndZoom(point, 5);
    // 创建点坐标
    // var point = new BMap.Point(125.354, 43.834);

    // 初始化地图，设置中心点坐标和地图级别
    // map.centerAndZoom(point, 13);
    map.setMapStyle({ style: 'midnight' });
    //开启鼠标滚轮缩放，地图的鼠标滚轮缩放默认是关闭的，需要配置开启。
    map.enableScrollWheelZoom(true);
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP,
        ]
    }));
    var points = [
        // points_data
     { "count" : 73750, "lat" : 43.8622, "lng" : 125.3215 }, 
     { "count" : 6300, "lat" : 45.7539, "lng" : 126.6306 }, 
     { "count" : 5450, "lat" : 39.9042, "lng" : 116.4074 }, 
     { "count" : 3900, "lat" : 41.8057, "lng" : 123.4316 }, 
     { "count" : 1700, "lat" : 23.1292, "lng" : 113.2644 }, 
     { "count" : 1450, "lat" : 37.8719, "lng" : 112.5603 }, 
     { "count" : 1000, "lat" : 36.6682, "lng" : 117.0012 }, 
     { "count" : 900, "lat" : 34.7569, "lng" : 113.6505 }, 
     { "count" : 850, "lat" : 30.5804, "lng" : 114.2999 }, 
     { "count" : 800, "lat" : 38.0422, "lng" : 114.5744 }, 
     { "count" : 750, "lat" : 32.0606, "lng" : 118.7778 }, 
     { "count" : 650, "lat" : 40.8207, "lng" : 111.6622 }, 
     { "count" : 600, "lat" : 30.2741, "lng" : 120.1551 }, 
     { "count" : 500, "lat" : 29.5646, "lng" : 106.5528 }, 
     { "count" : 450, "lat" : 31.2304, "lng" : 121.4737 }, 
     { "count" : 450, "lat" : 26.0774, "lng" : 119.3061 }, 
     { "count" : 400, "lat" : 39.1259, "lng" : 117.2011 }, 
     { "count" : 350, "lat" : 30.6624, "lng" : 104.0665 }, 
     { "count" : 350, "lat" : 22.8199, "lng" : 108.3196 }, 
     { "count" : 350, "lat" : 31.8202, "lng" : 117.2272 }, 
     { "count" : 200, "lat" : 20.0209, "lng" : 110.3475 }, 
     { "count" : 150, "lat" : 28.2281, "lng" : 112.9388 }, 
     { "count" : 150, "lat" : 34.2583, "lng" : 108.9401 }, 
     { "count" : 150, "lat" : 36.0611, "lng" : 103.8343 }, 
     { "count" : 100, "lat" : 25.0402, "lng" : 102.7093 }, 
     { "count" : 50, "lat" : 43.8198, "lng" : 87.6171 }, 
     { "count" : 50, "lat" : 35.9078, "lng" : 127.5683 }, 
     { "count" : 50, "lat" : 38.4764, "lng" : 106.2902 }, 
     { "count" : 50, "lat" : 38.5266, "lng" : -97.7278 },
        { "count": 712, "lat": 22.5385001957843, "lng": 113.936539169252 },
        { "count": 6700, "lat": 45.8088258279521, "lng": 126.541615090316 },
        { "count": 3500, "lat": 45.7658661637579, "lng": 126.675638499523 },
        { "count": 400, "lat": 43.8524275671504, "lng": 125.296653763226 },
        { "count": 2970, "lat": 43.8406414749619, "lng": 125.295401255854 },
        { "count": 501, "lat": 43.8219535010431, "lng": 125.330602075906 },
        { "count": 66, "lat": 41.8022741388046, "lng": 123.465461035375 },
        { "count": 342, "lat": 41.6838300691906, "lng": 123.471096644822 },
        { "count": 43, "lat": 41.125475259583, "lng": 122.975490266148 },
        { "count": 38, "lat": 40.2264133715942, "lng": 116.23761791731 },
        { "count": 40, "lat": 39.9990465606024, "lng": 117.418506894953 },
        { "count": 114, "lat": 39.9654898411007, "lng": 116.305434054497 },
        { "count": 86, "lat": 39.9348272723959, "lng": 116.422400977662 },
        { "count": 912, "lat": 39.9109245472995, "lng": 116.413383697123 },
        { "count": 51, "lat": 39.8649371975573, "lng": 116.292401887311 },
        { "count": 40, "lat": 39.8162945478362, "lng": 116.448872873244 },
        { "count": 10, "lat": 39.7999408646228, "lng": 116.513153100283 },
        { "count": 93, "lat": 39.7325552365544, "lng": 116.348625212231 },
        { "count": 186, "lat": 39.0936678434039, "lng": 117.20952321467 },
        { "count": 182, "lat": 38.9189536667856, "lng": 121.621631484592 },
        { "count": 54, "lat": 38.0483119268727, "lng": 114.521531901574 },
        { "count": 0, "lat": 37.8534334207121, "lng": 113.606568214219 },
        { "count": 39, "lat": 36.6721629500427, "lng": 117.082567313895 },
        { "count": 157, "lat": 36.6565542017872, "lng": 117.12639941261 },
        { "count": 54, "lat": 36.0934495948601, "lng": 120.381404487335 },
        { "count": 286, "lat": 36.0722274966632, "lng": 120.389455191146 },
        { "count": 60, "lat": 36.0722274966632, "lng": 120.389455191146 },
        { "count": 110, "lat": 34.8060704456617, "lng": 113.666447732395 },
        { "count": 378, "lat": 34.7534388504544, "lng": 113.631419207339 },
        { "count": 571, "lat": 34.3472688166239, "lng": 108.946465550632 },
        { "count": 81, "lat": 34.2991481065889, "lng": 108.953401187814 },
        { "count": 38, "lat": 34.2364739404118, "lng": 108.940497747807 },
        { "count": 142, "lat": 34.2206352399858, "lng": 108.951440456377 },
        { "count": 62, "lat": 34.212666550113, "lng": 117.290575434394 },
        { "count": 64, "lat": 32.4006769360903, "lng": 119.419418908229 },
        { "count": 45, "lat": 32.1026002078297, "lng": 118.915422984906 },
        { "count": 39, "lat": 32.0703557396758, "lng": 121.081425494976 },
        { "count": 77, "lat": 32.064679277923, "lng": 118.634604058754 },
        { "count": 929, "lat": 32.0646528856184, "lng": 118.802421721245 },
        { "count": 76, "lat": 32.0547566829488, "lng": 118.804412635747 },
        { "count": 97, "lat": 32.0451386064049, "lng": 118.80040736097 },
        { "count": 74, "lat": 32.0093696954464, "lng": 118.738569446952 },
        { "count": 100, "lat": 31.9978588054656, "lng": 118.785445364057 },
        { "count": 118, "lat": 31.9865494312008, "lng": 120.901591738661 },
        { "count": 143, "lat": 31.9585268691769, "lng": 118.846567059092 },
        { "count": 50, "lat": 31.8848866955543, "lng": 117.271459133819 },
        { "count": 40, "lat": 31.8637869416569, "lng": 117.315587044539 },
        { "count": 113, "lat": 31.8573782171042, "lng": 117.266460782301 },
        { "count": 55, "lat": 31.8363239476236, "lng": 119.977514292755 },
        { "count": 553, "lat": 31.8265778336868, "lng": 117.233442664976 },
        { "count": 251, "lat": 31.8157956533278, "lng": 119.981484713278 },
        { "count": 57, "lat": 31.7992934677822, "lng": 117.316576258567 },
        { "count": 66, "lat": 31.7064466117421, "lng": 119.948611672294 },
        { "count": 41, "lat": 31.659538276741, "lng": 120.759495886651 },
        { "count": 42, "lat": 31.5947616328144, "lng": 120.363425711028 },
        { "count": 73, "lat": 31.5716450241348, "lng": 120.309599514361 },
        { "count": 50, "lat": 31.5346396999741, "lng": 120.291547526155 },
        { "count": 48, "lat": 31.5346396999741, "lng": 120.291547526155 },
        { "count": 382, "lat": 31.4988097326857, "lng": 120.318583288106 },
        { "count": 182, "lat": 31.4102794734761, "lng": 121.496563013524 },
        { "count": 194, "lat": 31.3908634250818, "lng": 120.987452497949 },
        { "count": 202, "lat": 31.3801553396772, "lng": 121.272595058352 },
        { "count": 68, "lat": 31.3746899214927, "lng": 120.648565935835 },
        { "count": 86, "lat": 31.3418313009926, "lng": 120.623454973101 },
        { "count": 0, "lat": 31.3304431437088, "lng": 120.729889713315 },
        { "count": 833, "lat": 31.3035640744417, "lng": 120.592412229593 },
        { "count": 166, "lat": 31.2697466989313, "lng": 121.511586454534 },
        { "count": 101, "lat": 31.2682614458462, "lng": 120.63850751921 },
        { "count": 207, "lat": 31.265524144657, "lng": 121.532519937325 },
        { "count": 271, "lat": 31.2549733682795, "lng": 121.403569349165 },
        { "count": 234, "lat": 31.2372471520636, "lng": 121.491585592524 },
        { "count": 2926, "lat": 31.235929042252, "lng": 121.480538860176 },
        { "count": 391, "lat": 31.2338449304016, "lng": 121.453431772768 },
        { "count": 682, "lat": 31.2273482924363, "lng": 121.550454606831 },
        { "count": 245, "lat": 31.2268479682254, "lng": 121.43045437545 },
        { "count": 438, "lat": 31.1945567728227, "lng": 121.443396352763 },
        { "count": 127, "lat": 31.1554543179807, "lng": 121.130553104672 },
        { "count": 47, "lat": 31.1446441904726, "lng": 120.651567174544 },
        { "count": 639, "lat": 31.1188425800874, "lng": 121.38861193361 },
        { "count": 281, "lat": 31.0371351764644, "lng": 121.234479596241 },
        { "count": 71, "lat": 30.9237201102853, "lng": 121.480503736431 },
        { "count": 48, "lat": 30.8875337678345, "lng": 114.382453996755 },
        { "count": 95, "lat": 30.7509748309201, "lng": 120.76355182586 },
        { "count": 0, "lat": 30.7461261103737, "lng": 103.935413788713 },
        { "count": 86, "lat": 30.6973560428741, "lng": 104.057403587137 },
        { "count": 105, "lat": 30.6800378070068, "lng": 104.067445474942 },
        { "count": 66, "lat": 30.665589283983, "lng": 104.108591550351 },
        { "count": 83, "lat": 30.6619044903172, "lng": 104.089561756597 },
        { "count": 1135, "lat": 30.6558218784164, "lng": 104.081533510424 },
        { "count": 161, "lat": 30.648712685321, "lng": 104.049424478275 },
        { "count": 85, "lat": 30.6259198181092, "lng": 114.143458737859 },
        { "count": 141, "lat": 30.6072822768268, "lng": 114.277506131822 },
        { "count": 94, "lat": 30.6054027975623, "lng": 114.316579187606 },
        { "count": 1805, "lat": 30.5984667364009, "lng": 114.311581554732 },
        { "count": 104, "lat": 30.5875843407755, "lng": 114.221460312071 },
        { "count": 37, "lat": 30.5803993528211, "lng": 103.930391542268 },
        { "count": 37, "lat": 30.5626978409996, "lng": 104.281396964356 },
        { "count": 85, "lat": 30.5600520274434, "lng": 114.225445554635 },
        { "count": 199, "lat": 30.5595669835224, "lng": 114.32254851755 },
        { "count": 68, "lat": 30.544256638254, "lng": 104.196547966564 },
        { "count": 536, "lat": 30.506333956808, "lng": 114.350455546015 },
        { "count": 314, "lat": 30.4247392687451, "lng": 120.306592167175 },
        { "count": 99, "lat": 30.381564218182, "lng": 114.32855126446 },
        { "count": 88, "lat": 30.3246425666297, "lng": 120.148447009263 },
        { "count": 319, "lat": 30.2633105670119, "lng": 120.211538778112 },
        { "count": 1771, "lat": 30.2530829816934, "lng": 120.215511803721 },
        { "count": 304, "lat": 30.214332950144, "lng": 120.218471181393 },
        { "count": 137, "lat": 30.187511222214, "lng": 120.270470583974 },
        { "count": 40, "lat": 30.0363693113069, "lng": 120.585478478853 },
        { "count": 62, "lat": 29.9548849633495, "lng": 121.722518991324 },
        { "count": 35, "lat": 29.9046593599394, "lng": 121.850576214612 },
        { "count": 163, "lat": 29.8929483794761, "lng": 121.560421289221 },
        { "count": 887, "lat": 29.866033045866, "lng": 121.628572494341 },
        { "count": 113, "lat": 29.8657207083655, "lng": 121.557403072539 },
        { "count": 274, "lat": 29.8242063499959, "lng": 121.55542706991 },
        { "count": 123, "lat": 29.7239273430066, "lng": 106.637559060602 },
        { "count": 473, "lat": 29.5689962453389, "lng": 106.558434155376 },
        { "count": 59, "lat": 29.5590901829938, "lng": 106.57544006681 },
        { "count": 55, "lat": 29.5079277155528, "lng": 106.51755873943 },
        { "count": 38, "lat": 29.5026830988349, "lng": 106.668429778595 },
        { "count": 59, "lat": 29.31114987541, "lng": 120.081580993059 },
        { "count": 54, "lat": 29.0846393855136, "lng": 119.653436190529 },
        { "count": 40, "lat": 28.7254704805065, "lng": 115.884636656884 },
        { "count": 103, "lat": 28.6912591797752, "lng": 115.905466026059 },
        { "count": 236, "lat": 28.6894552950607, "lng": 115.864589442316 },
        { "count": 52, "lat": 28.6875960061734, "lng": 115.968552405054 },
        { "count": 252, "lat": 28.6619767099006, "lng": 115.883535693651 },
        { "count": 55, "lat": 28.2613786876841, "lng": 112.992584917638 },
        { "count": 170, "lat": 28.2414888364726, "lng": 112.937447644098 },
        { "count": 635, "lat": 28.2348893999436, "lng": 112.945473195352 },
        { "count": 72, "lat": 28.1919132473047, "lng": 113.039407744872 },
        { "count": 111, "lat": 28.1422327116541, "lng": 113.042421559857 },
        { "count": 63, "lat": 28.1182112174406, "lng": 112.996592258517 },
        { "count": 101, "lat": 28.0010854044722, "lng": 120.706476890355 },
        { "count": 0, "lat": 27.7518618549563, "lng": 106.719346094206 },
        { "count": 1338, "lat": 26.6835884991238, "lng": 106.629596839886 },
        { "count": 47, "lat": 26.6533248223097, "lng": 106.636576763527 },
        { "count": 126, "lat": 26.0881140375554, "lng": 119.310491623217 },
        { "count": 291, "lat": 26.080429420698, "lng": 119.30346983854 },
        { "count": 38, "lat": 26.0585281506447, "lng": 119.320528211016 },
        { "count": 78, "lat": 26.0528416919268, "lng": 119.28043216493 },
        { "count": 64, "lat": 25.1223722798295, "lng": 102.758526212101 },
        { "count": 40, "lat": 25.0629568507656, "lng": 121.567929274569 },
        { "count": 45, "lat": 25.0498349619814, "lng": 102.713423280596 },
        { "count": 50, "lat": 25.0431987609468, "lng": 102.671557123503 },
        { "count": 80, "lat": 25.0211964238592, "lng": 102.7504817066 },
        { "count": 81, "lat": 24.8799523304983, "lng": 118.682446266804 },
        { "count": 367, "lat": 24.873998150044, "lng": 102.852448365004 },
        { "count": 211, "lat": 24.4854066051763, "lng": 118.096435499766 },
        { "count": 77, "lat": 24.2795568866606, "lng": 121.150732031455 },
        { "count": 37, "lat": 23.688230292088, "lng": 113.062468325272 },
        { "count": 176, "lat": 23.4111615048757, "lng": 113.226575806292 },
        { "count": 41, "lat": 23.3590917177251, "lng": 116.688528640548 },
        { "count": 90, "lat": 23.2665924006313, "lng": 113.817545668895 },
        { "count": 3147, "lat": 23.135336306695, "lng": 113.271431344459 },
        { "count": 271, "lat": 23.135336306695, "lng": 113.271431344459 },
        { "count": 472, "lat": 23.1352601201484, "lng": 113.273426480996 },
        { "count": 303, "lat": 23.1317911349748, "lng": 113.250502263373 },
        { "count": 1356, "lat": 23.1303578351046, "lng": 113.368509424279 },
        { "count": 147, "lat": 23.1163588547255, "lng": 114.423558016581 },
        { "count": 549, "lat": 23.0889812966478, "lng": 113.323539980973 },
        { "count": 36, "lat": 23.0528887711256, "lng": 112.47148894063 },
        { "count": 243, "lat": 23.035011446003, "lng": 113.14944567828 },
        { "count": 713, "lat": 23.0277587507889, "lng": 113.128512195497 },
        { "count": 697, "lat": 23.0273084116433, "lng": 113.758420457876 },
        { "count": 97, "lat": 23.0153743688163, "lng": 113.129505182407 },
        { "count": 883, "lat": 22.9438307315175, "lng": 113.39046958043 },
        { "count": 59, "lat": 22.8320110042885, "lng": 113.72808396217 },
        { "count": 90, "lat": 22.8226066011871, "lng": 108.373450825818 },
        { "count": 145, "lat": 22.8104534267953, "lng": 113.300453439544 },
        { "count": 53, "lat": 22.8079292965282, "lng": 113.531435543723 },
        { "count": 977, "lat": 22.757596649222, "lng": 114.048528761211 },
        { "count": 83, "lat": 22.7544658836353, "lng": 113.942560061931 },
        { "count": 1170, "lat": 22.726016550781, "lng": 114.254454878961 },
        { "count": 66, "lat": 22.584603880965, "lng": 113.08855619524 },
        { "count": 924, "lat": 22.5600329089245, "lng": 113.89042744066 },
        { "count": 277, "lat": 22.5544848758557, "lng": 114.137431901571 },
        { "count": 2687, "lat": 22.5484566379841, "lng": 114.064551836587 },
        { "count": 582, "lat": 22.5284659120719, "lng": 114.061547004657 },
        { "count": 179, "lat": 22.5223146707905, "lng": 113.399422362631 },
        { "count": 244, "lat": 22.2765646542492, "lng": 113.582554786549 },
        { "count": 97, "lat": 22.2730038617986, "lng": 113.550472434084 },
        { "count": 38, "lat": 21.276723439012, "lng": 110.365554413928 },
        { "count": 49, "lat": 20.0440494392567, "lng": 110.325525471264 }
    ];

    if (!isSupportCanvas()) {
        alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
    }


    //详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md

    //参数说明如下:
    /* visible 热力图是否显示,默认为true
     * opacity 热力的透明度,1-100
     * radius 势力图的每个点的半径大小   
     * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
     *	{
            .2:'rgb(0, 255, 255)',
            .5:'rgb(0, 110, 255)',
            .8:'rgb(100, 0, 255)'
        }
        其中 key 表示插值的位置, 0~1. 
            value 为颜色值. 
     */
    heatmapOverlay = new BMapLib.HeatmapOverlay({ "radius": 20 });
    map.addOverlay(heatmapOverlay);
    heatmapOverlay.setDataSet({ data: points, max: 1000 });


    function setRadius(radius) {
        document.getElementById("radius-result").innerHTML = radius;
        heatmapOverlay.setOptions({ "radius": radius })
    }

    function setOpacity(opacity) {
        document.getElementById("opacity-result").innerHTML = opacity;
        heatmapOverlay.setOptions({ "opacity": opacity })
    }

    function toggle() {
        heatmapOverlay.toggle()
    }

    function setGradient() {

        /*
       格式如下所示:
       {
             0:'rgb(102, 255, 0)',
             .5:'rgb(255, 170, 0)',
             1:'rgb(255, 0, 0)'
       }
        */
        var gradient = {};
        var colors = document.querySelectorAll("input[type='color']");
        colors = [].slice.call(colors, 0);
        colors.forEach(function (ele) {
            gradient[ele.getAttribute("data-key")] = ele.value;
        });
        heatmapOverlay.setOptions({ "gradient": gradient });
    }


    function isSupportCanvas() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }
    //设置地图旋转角度
    // map.setHeading(64.5);
    //设置地图的倾斜角度
    // map.setTilt(0);
    //设置地图模式为：地球模式
    // map.setMapType(BMAP_EARTH_MAP)
    // this.cityToCode(cityNames)
    // document.getElementById('city').innerHTML = cityNames;
    // document.getElementById('longitide').innerHTML = longiDis;
    // document.getElementById('lagitide').innerHTML = lagiDis;
}


//获取当前城市
var curCity = new BMap.LocalCity();
curCity.get(initMap)

