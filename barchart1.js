am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv3");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX"
    }));
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15
    });
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "year",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "uninsured",
      sequencedInterpolation: true,
      categoryXField: "year",
      tooltip: am5.Tooltip.new(root, {
        labelText:"{valueY}%"
      })
    }));
    
    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
    series.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    series.columns.template.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    
    // Set data
    var data = [{
    "year": "Calvert",
    "uninsured": 2
    }, {
    "year": "Carroll",
    "uninsured": 2
    }, {
    "year": "Allegany",
    "uninsured": 3
    }, {
    "year": "Anne Arundel",
    "uninsured": 3
    }, {
    "year": "Baltimore City",
    "uninsured": 3
    }, {
    "year": "Baltimore",
    "uninsured": 3
    }, {
    "year": "Cecil",
    "uninsured": 3
    }, {
    "year": "Charles",
    "uninsured": 3
    }, {
    "year": "Frederick",
    "uninsured": 3
    }, {
    "year": "Harford",
    "uninsured": 3
    }, {
    "year": "Howard",
    "uninsured": 3
    }, {
    "year": "Montgomery",
    "uninsured": 3
    }, {
    "year": "Queen Anne's",
    "uninsured": 3
    }, {
    "year": "Washington",
    "uninsured": 3
    }, {
    "year": "Caroline",
    "uninsured": 4
    }, {
    "year": "Dorchester",
    "uninsured": 4
    }, {
    "year": "Garrett",
    "uninsured": 4
    }, {
    "year": "Prince George's",
    "uninsured": 4
    }, {
    "year": "St. Mary's",
    "uninsured": 4
    }, {
    "year": "Somerset",
    "uninsured": 4
    }, {
    "year": "Wicomico",
    "uninsured": 4
    }, {
    "year": "Worcester",
    "uninsured": 4
    }, {
    "year": "Talbot",
    "uninsured": 5
    }, {
    "year": "Kent",
    "uninsured": 5
    }]
    
    xAxis.data.setAll(data);
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()