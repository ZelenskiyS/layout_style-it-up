report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/700373478_entire-document_0_document_0_tablet_h.png",
        "test": "../bitmaps_test/20190829-104142/700373478_entire-document_0_document_0_tablet_h.png",
        "selector": "document",
        "fileName": "700373478_entire-document_0_document_0_tablet_h.png",
        "label": "entire-document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/style-it-up/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -8
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 48
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/700373478_default-block_0_qa-block_0_tablet_h.png",
        "test": "../bitmaps_test/20190829-104142/700373478_default-block_0_qa-block_0_tablet_h.png",
        "selector": "#qa-block",
        "fileName": "700373478_default-block_0_qa-block_0_tablet_h.png",
        "label": "default-block",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/style-it-up/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/700373478_hovered-block_0_qa-block_0_tablet_h.png",
        "test": "../bitmaps_test/20190829-104142/700373478_hovered-block_0_qa-block_0_tablet_h.png",
        "selector": "#qa-block",
        "fileName": "700373478_hovered-block_0_qa-block_0_tablet_h.png",
        "label": "hovered-block",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/style-it-up/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ]
});