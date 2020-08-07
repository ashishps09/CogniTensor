import React from 'react';
import Chart from 'react-apexcharts';

class representationComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        bar : {series: [{
          name: 'IT',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Agriculture',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Others',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '(thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " thousands"
              }
            }
          }
        }
        },
        hiddenBar1 : true,
        hiddebBar2 : true
        
      
      };
      this.handleChart = this.handleChart.bind(this)
      this.handleCategory = this.handleCategory.bind(this)
    }
    handleChart(event){
      var typ = event.target.value;
      if(typ == "bar1"){
        let Bar1 = {
            options: {
              chart: {
                id: 'apexchart-example'
              },
              xaxis: {
                categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
              }
            },
            series: [{
              name: 'series-1',
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }]
          }
          console.log(1)
          this.setState({bar : Bar1, hiddenBar1 : false, hiddenBar2 : true})
        }
        else{
         let Bar2 = {
      
            series: [{
              name: 'IT',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
              name: 'Agriculture',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
              name: 'Others',
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
              },
              yaxis: {
                title: {
                  text: '(thousands)'
                }
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val + " thousands"
                  }
                }
              }
            },
          
          
          };
          
          this.setState({bar : Bar2, hiddenBar1 : true, hiddenBar2 : false})
        }
        
      // console.log(this.getBarType(event.target.value))
        // this.setState({bar : this.getBarType(event.target.value)})
    }
    handleCategory(event){
      let category = event.target.value;
      var checkBox = document.getElementById("others");
      if(checkBox.checked == true){
      let Bar2 = {
      
        series: [{
          name: 'IT',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Agriculture',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '(thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " thousands"
              }
            }
          }
        },
      
      
      };
      
      this.setState({bar : Bar2, hiddenBar1 : true, hiddenBar2 : false})
      }
    }
    getBarType(typ){
        
    }
    render() {
      return (
  <div id="chart">
      <label for="cars">Choose a Bar:</label>

<select name="bartype" id="bartype" onClick={this.handleChart}>
  <option value="bar1">Monthly Bar Chart</option>
  <option value="bar2">Yearly Bar Chart</option>
</select>
<label for="cars" hidden={this.state.hiddenBar2} >&nbsp;Choose Category to be Excluded:  &nbsp;</label>
<input type="checkbox" id="others" name="others" value="others" onChange={this.handleCategory} hidden={this.state.hiddenBar2}/>
<label for="cars" hidden={this.state.hiddenBar2} > &nbsp; Others &nbsp;</label>

<label for="cars" hidden={this.state.hiddenBar1}>Choose Category to be Excluded:</label>
<select name="cattype" id="cattype" onClick={this.handleCategory} hidden={this.state.hiddenBar1}>
  <option value="None">None</option>
</select>
<Chart options={this.state.bar.options} series={this.state.bar.series} type="bar" height={350} />
</div>
      );
    }
  }

export default representationComp;