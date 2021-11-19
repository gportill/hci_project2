am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv4");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));

    // TODO
    var data = [{
    "year": "Allegany",
    "0.5": 94,
    "1": 66
    }, {
    "year": "Anne Arundel",
    "0.5": 70,
    "1": 36
    }, {
    "year": "Baltimore City",
    "0.5": 47,
    "1": 5
    }, {
    "year": "Baltimore County",
    "0.5": 66,
    "1": 28
    }, {
    "year": "Calvert",
    "0.5": 89,
    "1": 77
    }, {
    "year": "Caroline",
    "0.5": 92,
    "1": 77
    }, {
    "year": "Carroll",
    "0.5": 85,
    "1": 65
    }, {
    "year": "Cecil",
    "0.5": 88,
    "1": 71
    }, {
    "year": "Charles",
    "0.5": 77,
    "1": 58
    }, {
    "year": "Dorchester",
    "0.5": 90,
    "1": 71
    }, {
    "year": "Frederick",
    "0.5": 71,
    "1": 48
    }, {
    "year": "Garrett",
    "0.5": 98,
    "1": 85
    }, {
    "year": "Harford",
    "0.5": 76,
    "1": 44
    }, {
    "year": "Howard",
    "0.5": 65,
    "1": 28
    }, {
    "year": "Kent",
    "0.5": 81,
    "1": 62
    }, {
    "year": "Montgomery",
    "0.5": 56,
    "1": 20
    }, {
    "year": "Prince George's",
    "0.5": 60,
    "1": 25
    }, {
    "year": "Queen Anne's",
    "0.5": 90,
    "1": 78
    }, {
    "year": "St. Mary's",
    "0.5": 82,
    "1": 70
    }, {
    "year": "Somerset",
    "0.5": 91,
    "1": 71
    }, {
    "year": "Talbot",
    "0.5": 94,
    "1": 73
    }, {
    "year": "Washington",
    "0.5": 81,
    "1": 50
    }, {
    "year": "Wicomico",
    "0.5": 78,
    "1": 54
    }, {
    "year": "Worcester",
    "0.5": 83,
    "1": 54
    }]

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "county",
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {
        themeTags: ["axis"],
        animationDuration: 200
      })
    }));

    xAxis.data.setAll(data);

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

    var series0 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "% of People with Low Access to Grocery Stores",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "0.5",
      categoryXField: "county",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        labelText: "0.5 miles: {valueY}%"
      })
    }));

    series0.columns.template.setAll({
      width: am5.percent(80),
      tooltipY: 0
    });


    series0.data.setAll(data);


    var series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "% of People with Low Access to Grocery Stores",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "1",
      categoryXField: "county",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        labelText: "1 mile: {valueY}%"
      })
    }));

    series1.columns.template.setAll({
      width: am5.percent(50),
      tooltipY: 0
    });

    series1.data.setAll(data);

    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    series1.appear();
    series0.appear();

}); // end am5.ready()