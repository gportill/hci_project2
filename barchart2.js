am5.ready(function() {
		
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv2");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
    am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
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
    
    var data = [{
    "year": "Allegany",
    "0.5": 2233,
    "1": 1051,
    "10": 19
    }, {
    "year": "Anne Arundel",
    "0.5": 4722,
    "1": 2276
    }, {
    "year": "Baltimore City",
    "0.5": 28481,
    "1": 2867,
    "10": 0
    }, {
    "year": "Baltimore",
    "0.5": 12240,
    "1": 4094,
    "10": 0
    }, {
    "year": "Calvert",
    "0.5": 806,
    "1": 583,
    "10": 0
    }, {
    "year": "Caroline",
    "0.5": 687,
    "1": 456,
    "10": 1
    }, {
    "year": "Carroll",
    "0.5": 2086,
    "1": 1320,
    "10": 0
    }, {
    "year": "Cecil",
    "0.5": 1742,
    "1": 1033,
    "10": 0
    }, {
    "year": "Charles",
    "0.5": 1369,
    "1": 850,
    "10": 4
    }, {
    "year": "Dorchester",
    "0.5": 1109,
    "1": 543,
    "10": 40
    }, {
    "year": "Frederick",
    "0.5": 2475,
    "1": 1267,
    "10": 0
    }, {
    "year": "Garrett",
    "0.5": 729,
    "1": 509,
    "10": 1
    }, {
    "year": "Harford",
    "0.5": 3100,
    "1": 1408,
    "10": 0
    }, {
    "year": "Howard",
    "0.5": 514,
    "1": 2383,
    "10": 0
    }, {
    "year": "Kent",
    "0.5": 296,
    "1": 522,
    "10": 0
    }, {
    "year": "Montgomery",
    "0.5": 8713,
    "1": 1621,
    "10": 0
    }, {
    "year": "Prince George's",
    "0.5": 3052,
    "1": 12951,
    "10": 0
    }, {
    "year": "Queen Anne's",
    "0.5": 567,
    "1": 468,
    "10": 1
    }, {
    "year": "St. Mary's",
    "0.5": 1310,
    "1": 1059,
    "10": 0
    }, {
    "year": "Somerset",
    "0.5": 782,
    "1": 469,
    "10": 87
    }, {
    "year": "Talbot",
    "0.5": 647,
    "1": 327,
    "10": 0
    }, {
    "year": "Washington",
    "0.5": 3114,
    "1": 1281,
    "10": 0
    }, {
    "year": "Wicomico",
    "0.5": 1952,
    "1": 1202,
    "10": 0
    }, {
    "year": "Worcester",
    "0.5": 977,
    "1": 497,
    "10": 0
    }]
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "year",
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
    }));
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    min: 0,
    renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        stacked: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "year"
    }));
    
    series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}: {valueY}",
        tooltipY: am5.percent(10)
    });
    series.data.setAll(data);
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
    
    series.bullets.push(function () {
        return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true
        })
        });
    });
    
    legend.data.push(series);
    }
    
    // makeSeries("Europe", "europe");
    // makeSeries("North America", "namerica");
    makeSeries("0.5 miles", "0.5");
    // makeSeries("Latin America", "lamerica");
    makeSeries("1 mile", "1");
    makeSeries("10 miles", "10");
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()