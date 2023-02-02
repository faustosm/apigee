const assert = require("assert"),
    path = require("path"),
    Bundle = require("../apigeelint/lib/package/Bundle.js"),
    bl = require("../apigeelint/lib/package/bundleLinter.js");

const configuration = {
    debug: true,
    source: {
        type: "filesystem",
        path: path.resolve(__dirname, '../apigeelint/test/fixtures/resources/sampleProxy/24Solver/apiproxy'),
        bundleType: "apiproxy"
    },
    profile: 'apigeex',
    excluded: {},
    setExitCode: false,
    output: () => { } // suppress output
};

describe("Check proxy name prefix", function () {
    var pluginFile = path.resolve(__dirname, "checkProxyNamePrefix.js"),
        ruleId = "MyRule-001";

    it("should show error when proxy name don't start with B2B-* or B2C-*", function () {
        var bundle = new Bundle(configuration);
        bl.executePlugin(pluginFile, bundle);
        var report = getReportByRuleId(ruleId, bundle.getReport());
        assert.equal(report[0].message, "API Proxy name (TwentyFour) should start with B2B-* or B2C-*");
        assert.equal(report[0].severity, 2);
    });

    it("shouldn't show error when proxy name starts with B2B-*", function () {
        var bundle = new Bundle(configuration);
        bundle.getName = function () { return "B2B-TEST"; };
        bl.executePlugin(pluginFile, bundle);
        var report = getReportByRuleId(ruleId, bundle.getReport());
        assert.equal(report.length, 0);
    });

    it("shouldn't show error when proxy name starts with B2C-*", function () {
        var bundle = new Bundle(configuration);
        bundle.getName = function () { return "B2C-TEST"; };
        bl.executePlugin(pluginFile, bundle);
        var report = getReportByRuleId(ruleId, bundle.getReport());
        assert.equal(report.length, 0);
    });

});

describe("Check Spike Arrest", function () {
    var pluginFile = path.resolve(__dirname, "checkPreFlowSpikeArrest.js"),
        ruleId = "MyRule-002";

    it("should show error when missing Spike Arrest", function () {
        var bundle = new Bundle(configuration);
        bl.executePlugin(pluginFile, bundle);
        var report = getReportByRuleId(ruleId, bundle.getReport());
        assert.equal(report[0].message, "Spike Arrest policy should be included in the PreFlow section.");
        assert.equal(report[0].severity, 2);
    });

});

function getReportByRuleId(ruleId, bundleReport) {
    var jsimpl = bl.getFormatter("json.js"),
        jsonReport = JSON.parse(jsimpl(bundleReport)),
        reports = [];

    for (let r of jsonReport) {
        for (let m of r.messages) {
            if (m.ruleId === ruleId) {
                reports.push(m);
            }
        }
    }
    return reports;
}
