var express = require('express');
var app = express();
const parseJson = require('parse-json');
var fs = require("fs");
var dateObj = new Date(1559806715124);
// var dateObj1 = new Date(1559807714999);
var countCustomerDetails = 0

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/liveCampaign', function (req, res) {
   fs.readFile( "D:/react-app/test/src/assets/data.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    var currDate = new Date();
    campaignDetails = [];
    var countCampaignDetails = 0;
    for(var key in data['data']){
        currDateFormat = new Date(currDate).getDate()+'/'+new Date(currDate).getMonth()+'/'+new Date(currDate).getFullYear();
        toChange = new Date(data['data'][key]['createdOn']);
        toChangeDateFormat = toChange.getDate()+'/'+toChange.getMonth()+'/'+toChange.getFullYear();
        noOfDays = date_diff_indays(currDateFormat, toChangeDateFormat)
        console.log(noOfDays)
        if((noOfDays == 0 )){
            let finalData = {}
            finalData['createdOn'] = toChangeDateFormat
            finalData['noOfDays'] = 'after '+noOfDays + ' days'
            finalData['name'] = data['data'][key]['name']
            finalData['region'] = data['data'][key]['region']
            finalData['price'] = data['data'][key]['price']
            finalData['csv'] = data['data'][key]['csv']
            finalData['report'] =  data['data'][key]['report']
            campaignDetails[countCampaignDetails++] = finalData
            //   console.log(campaignDetails[0])
        } 
    }
    res.end( JSON.stringify(campaignDetails) );
});
})


app.get('/upcomingCampaign', function (req, res) {
    fs.readFile( "D:/react-app/test/src/assets/data.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var currDate = new Date();
        campaignDetails = [];
        var countCampaignDetails = 0;
        for(var key in data['data']){
            currDateFormat = new Date(currDate).getDate()+'/'+new Date(currDate).getMonth()+'/'+new Date(currDate).getFullYear();
            toChange = new Date(data['data'][key]['createdOn']);
            toChangeDateFormat = toChange.getDate()+'/'+toChange.getMonth()+'/'+toChange.getFullYear();
            noOfDays = date_diff_indays(currDateFormat, toChangeDateFormat)
            console.log(noOfDays)
            if((noOfDays > 0 )){
                let finalData = {}
                finalData['createdOn'] = toChangeDateFormat
                finalData['noOfDays'] = 'after '+noOfDays + ' days'
                finalData['name'] = data['data'][key]['name']
                finalData['region'] = data['data'][key]['region']
                finalData['price'] = data['data'][key]['price']
                finalData['csv'] = data['data'][key]['csv']
                finalData['report'] =  data['data'][key]['report']
                campaignDetails[countCampaignDetails++] = finalData
                //   console.log(campaignDetails[0])
            } 
        }
        res.end( JSON.stringify(campaignDetails) );
    });
 })

var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
app.get('/pastCampaign', function (req, res) {
    fs.readFile( "D:/react-app/test/src/assets/data.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var currDate = new Date();
        campaignDetails = [];
        var countCampaignDetails = 0;
        for(var key in data['data']){
            currDateFormat = new Date(currDate).getDate()+'/'+new Date(currDate).getMonth()+'/'+new Date(currDate).getFullYear();
            toChange = new Date(data['data'][key]['createdOn']);
            toChangeDateFormat = toChange.getDate()+'/'+toChange.getMonth()+'/'+toChange.getFullYear();
            noOfDays = date_diff_indays(currDateFormat, toChangeDateFormat)
            console.log(data['data'][key]['name'],toChangeDateFormat)
            if((noOfDays < 0 )){
                let finalData = {}
                finalData['createdOn'] = toChangeDateFormat
                finalData['noOfDays'] = Math.abs(noOfDays) + ' days ago'
                finalData['name'] = data['data'][key]['name']
                finalData['region'] = data['data'][key]['region']
                finalData['price'] = data['data'][key]['price']
                finalData['csv'] = data['data'][key]['csv']
                finalData['report'] =  data['data'][key]['report']
                campaignDetails[countCampaignDetails++] = finalData
                //   console.log(campaignDetails[0])
            } 
        }
        res.end( JSON.stringify(campaignDetails) );
    });
 })
 

 app.get('/update/:name/:createdOn', function (req, res) {
    fs.readFile( "D:/react-app/test/src/assets/data.json", 'utf8', function (err, getdata) {
        getdata = JSON.parse(getdata);
        createdOn = req.params.createdOn
        name = req.params.name
        let obj = {
            data: []
        };
        countDetails = 0
        for(var key in getdata['data']){
            if(name == getdata['data'][key]['name'] ){
                getdata['data'][key]['createdOn'] = parseInt(createdOn)
                  obj.data.push(getdata['data'][key])
            } 
            else{
                obj.data.push(getdata['data'][key])
            }
        }
        console.log(obj.data)
        fs.writeFile('D:/react-app/test/src/assets/data.json', JSON.stringify(obj), 'utf8', function(err) {
            if (err) throw err;
            console.log('complete');
            }
        );
        res.end( JSON.stringify(obj) );
    });
 })


 var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})