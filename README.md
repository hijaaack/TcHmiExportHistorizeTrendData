## Disclaimer
This is a personal guide not a peer reviewed journal or a sponsored publication. We make
no representations as to accuracy, completeness, correctness, suitability, or validity of any
information and will not be liable for any errors, omissions, or delays in this information or any
losses injuries, or damages arising from its display or use. All information is provided on an as
is basis. It is the reader’s responsibility to verify their own facts.

The views and opinions expressed in this guide are those of the authors and do not
necessarily reflect the official policy or position of any other agency, organization, employer or
company. Assumptions made in the analysis are not reflective of the position of any entity
other than the author(s) and, since we are critically thinking human beings, these views are
always subject to change, revision, and rethinking at any time. Please do not hold us to them
in perpetuity.

## TcHmiExportHistorizeTrendData
Export the historize trend data and saves it as a .json to the client.

The export function does not work in the embedded browser (LiveView) that is used inside Visual Studio. 

To test it, open the LivewView in your installed browser or publish the project and test it! :)

## Screenshot
![enter image description here](https://user-images.githubusercontent.com/75740551/248730404-6ed226ed-2d0b-44a0-9298-2eaee6ba0411.png)

## JSON
Sample json export output (the x-y data was slimmed down for viewing it here) 

```json
{
  "apiVersion": 19,
  "requestType": "ReadWrite",
  "serverId": "8f4a989eec5d212170ffb3f1c84976b648ba8dfda2c241cf4457346b9563f11d",
  "commands": [
    {
      "symbol": "TcHmiSqliteHistorize.GetTrendLineData",
      "processedStart": "P7DT1H5M54.5987758S",
      "processedEnd": "P7DT1H5M54.6009993S",
      "writeValue": {
        "axesData": [
          [
            {
              "x": "2023-06-26T08:02:09.946Z",
              "y": -10
            },
            {
              "x": "2023-06-26T08:02:10.052Z",
              "y": 10
            },
            {
              "x": "2023-06-26T08:02:10.257Z",
              "y": 10
            },
            {
              "x": "2023-06-26T08:02:10.36Z",
              "y": -8
            },
            {
              "x": "2023-06-26T08:02:10.672Z",
              "y": 6
            }
          ]
        ]
      },
      "commandOptions": [
        "SendWriteValue",
        "SendErrorMessage",
        "ProcessTimingAsTimespan"
      ]
    }
  ]
}
```
