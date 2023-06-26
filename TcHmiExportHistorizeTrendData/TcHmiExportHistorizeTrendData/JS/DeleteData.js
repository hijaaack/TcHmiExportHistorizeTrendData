// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.42/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiExportHistorizeTrendData;
        (function (TcHmiExportHistorizeTrendData) {
            function DeleteData() {

                const funcParams = {
                    "disableRecording": false,
                    "symbolName": "PLC1.MAIN.nOut"                   
                };

                TcHmi.Server.writeSymbol("TcHmiSqliteHistorize.DeleteDatabaseEntries", funcParams, function (callback) {
                    console.log(callback);
                });


            }
            TcHmiExportHistorizeTrendData.DeleteData = DeleteData;
        })(TcHmiExportHistorizeTrendData = Functions.TcHmiExportHistorizeTrendData || (Functions.TcHmiExportHistorizeTrendData = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('DeleteData', 'TcHmi.Functions.TcHmiExportHistorizeTrendData', TcHmi.Functions.TcHmiExportHistorizeTrendData.DeleteData);
