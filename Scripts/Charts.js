
 // Revenue chart
const defaultOptions = {

    chart: {
        toolbar: {
            show: false
        },

        height: 280,
    },

    dataLabels: {
        enabled: false
    }

}

let barOptions  = {

    ...defaultOptions,

    chart :{
        ...defaultOptions.chart,
        type:"area"
    },
    tooltip :{
        enabled:true,
        y:{
            formatter:value => `${value}K`
        }
    },
    legend: {
        show: false,
    },
    stroke: {
        width: 2
        },
    series: [
        {
            name:"Income",
            data:[16.8, 16.8, 15.5, 17.8, 15.5, 17, 19, 16, 15, 17, 14, 17]
        },
        {
            name:"Expense",
            data:[16.5, 17.5, 16.2, 17.3, 16, 19.5, 16, 17, 16, 19, 18, 19]
        }
    ],
    colors: ['#4361EE', '#E64F59'],
    fill : {
        type:"gradient",
        gradient :{
            shadeIntensity: 2,
            opacityFrom: 0.1,
            opacityTo: 0.2,
            stops: [0, 30, 100]
        }
    },
    grid :{
        show: false
    },

    yaxis: {
        labels :{
            show:true,
            style :{
                colors: "#888ea8",
                fontFamily: "Nunito-Regular",
                fontWeight: 600,
                
            },
            formatter: value => `${value}K`
        },
    },

    xaxis :{
        labels :{
        show:true,
        floating:true,
            style: {
            fontSize: "12px",
            colors: "#888ea8",
            fontFamily: "Nunito-Regular",
            },
            offsetY: 4,
        },
        axisBorder:{
            show:false
        },
        axisTicks: {
            show: false
        },
        categories:["Jan", "Feb", "Mar", "Apr", "May", "jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
}

let chart = new ApexCharts(
    document.querySelector(".area-chart"), barOptions
)

chart.render();

// Sales Chart

let salesOptions = {
    
    series: [985, 737, 270],
    labels: ["Others", "Apparel", "Sports"],
    colors: ["#5818BD", "#DD9C3D", "#E64F59"],

    stroke: {
        width:15,
        colors : ["#0e1726"]
    },
    chart: {
        type: 'donut',
        height: 400
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: "bottom",
        itemMargin: {
            vertical: 40
        },
        labels: {
            fontSize:"28px",
            colors: "#bfc9d4",
            fontFamily: "Nunito-Regular"
        }
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            
            donut: {
                size: "75%",
                background: 'transparent',
                labels: {
                    show: true,
                    total: {
                        show: true,
                        label: 'Total',
                        fontSize: '32px',
                        fontFamily: 'Nunito-Semibold, Arial, sans-serif',
                        fontWeight: 600,
                        color: '#888ea8',
                    },
                    value: {
                        show: true,
                        fontSize: "28px",
                        color: "#bfc9d4",
                        
                    }

                }
            }
        }
    }
    
}

let sales_chart = new ApexCharts(
    document.querySelector(".sales-chart"), salesOptions
)

sales_chart.render();

// Daily Sales chart

var options = {
    series: [{
        name: 'Sales',
        data: [44, 55, 41, 67, 22, 43, 21]
    },
    {
        name: 'last week',
        data: [13, 23, 20, 8, 13, 27, 33]
        }],
    colors: ["#E2A03F", "#e0e6ed"],
    chart: {
        type: 'bar',
        height: 150,
        width:"100%",
        stacked: true,
        stackType: '100%',
        toolbar: {
            show: false
        },
        theme: true
    } ,
    xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: {
            show: false
        },
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show:false
        }
    },
    fill: {
        opacity:1
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false
    },
    plotOptions: {
        bar: {
            columnWidth: 12
        }
    },
    
};

var daily_sales_chart = new ApexCharts(document.querySelector(".daily-sales-chart"), options);
daily_sales_chart.render();

// orders chart

let orders_chart_options  = {

    chart :{
        type: "area",
        height: 200,
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    tooltip :{
        enabled:true,
    },
    legend: {
        show: false,
    },
    stroke: {
        width: 2
        },
    series: [
        {
            name:"Sales",
            data:[28, 40, 36, 52, 38, 60, 38, 52, 36, 40]
        }
    ],
    colors: ['#009688'],
    fill : {
        type:"gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 1,
            stops: [100, 100, 100]
        }
    },
    grid :{
        show: false
    },

    yaxis: {
        labels :{
            show:false
        }
    },
    xaxis :{
        labels :{
        show:false,
        },
        axisBorder:{
            show:false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        labels :{
            show:false,
        }// Adjust the value as needed
    }
}

let orders_chart = new ApexCharts(
    document.querySelector(".orders-chart"), orders_chart_options
)

orders_chart.render();
