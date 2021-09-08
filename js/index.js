var jf;
$(document).ready(function formInit() {
    $formDiv = $('#form-div');
    jf = new JsonForm($formDiv[0], formJson, {}, {});
    jf.observable.subscribe(function (data) {
    });

    jf.eventsObservable
        .filter(function (event) {
            return event.name == 'OpenPOCPopup';
        })
        .subscribe(function (event) {
            alert(JSON.stringify(event.data));
        });

    jf.eventsObservable
        .filter(function (event) {
            return event.name == 'ClearPOCField';
        })
        .subscribe(function (event) {
            var obj = {};
            obj["cp_" + event.data.internalSectionName] = "";
            obj["cp_" + event.data.internalSectionName + "_module_items"] = "";
            jf.data = obj;
        });
});