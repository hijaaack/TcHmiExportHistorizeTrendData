// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.42/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiExportHistorizeTrendData;
        (function (TcHmiExportHistorizeTrendData) {
            function ExportData() {

                //"yAxes" possible to export multiple symbols in the same method call
                //const funcParams = {
                //    "chartName": "TcHmiTrendLineChart",
                //    "xAxisStart": "First",
                //    "xAxisEnd": "Latest",
                //    "yAxes": [
                //        { "symbol": "PLC1.MAIN.nOut" },
                //        { "symbol": "PLC1.MAIN.nOut2" }
                //    ],
                //    "displayWidth": 1000
                //};

                const funcParams = {
                    "chartName": "TcHmiTrendLineChart", 
                    "xAxisStart": "First",
                    "xAxisEnd": "Latest",
                    "yAxes": [
                        { "symbol": "PLC1.MAIN.nOut" }
                    ],
                    "displayWidth": 10000
                };


                TcHmi.Server.writeSymbol("TcHmiSqliteHistorize.GetTrendLineData", funcParams, function (callback) {

                    var downloaderAElement = document.createElement('a');
                    var sName = "ExportedData";
                    downloaderAElement.download = sName.replace(/::/g, '_') + '.json';

                    let jsonExport = tchmi_clone_object(callback.response);
                    jsonExport.commands[0].writeValue = jsonExport.commands[0].readValue;
                    delete jsonExport.commands[0].readValue;
                    delete jsonExport.sessionId;
                    delete jsonExport.id;

                    downloaderAElement.href = 'data:application/json;utf8,' + JSON.stringify(jsonExport, null, 2);
                    downloaderAElement.style.display = 'none';
                    document.body.appendChild(downloaderAElement);
                    downloaderAElement.click();
                    document.body.removeChild(downloaderAElement);

                });

            }
            TcHmiExportHistorizeTrendData.ExportData = ExportData;
        })(TcHmiExportHistorizeTrendData = Functions.TcHmiExportHistorizeTrendData || (Functions.TcHmiExportHistorizeTrendData = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('ExportData', 'TcHmi.Functions.TcHmiExportHistorizeTrendData', TcHmi.Functions.TcHmiExportHistorizeTrendData.ExportData);
