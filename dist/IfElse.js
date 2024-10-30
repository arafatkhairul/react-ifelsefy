import React, { createContext, useContext, useEffect, useState } from "react";
// Context to manage conditional rendering state
var ConditionContext = createContext(null);
export var Conditional = function (_a) {
    var children = _a.children;
    var _b = useState(false), conditionMet = _b[0], setConditionMet = _b[1];
    // Reset the condition state for each Conditional component instance
    useEffect(function () {
        setConditionMet(false);
    }, []);
    return React.createElement(ConditionContext.Provider, { value: { conditionMet: conditionMet, setConditionMet: setConditionMet } }, children);
};
export var If = function (_a) {
    var condition = _a.condition, children = _a.children;
    var context = useContext(ConditionContext);
    if (!context)
        throw new Error("If must be used within a Conditional");
    var conditionMet = context.conditionMet, setConditionMet = context.setConditionMet;
    var shouldRender = condition && !conditionMet;
    useEffect(function () {
        if (shouldRender)
            setConditionMet(true);
    }, [shouldRender, setConditionMet]);
    return shouldRender ? React.createElement(React.Fragment, null, children) : null;
};
export var ElseIf = function (_a) {
    var condition = _a.condition, children = _a.children;
    var context = useContext(ConditionContext);
    if (!context)
        throw new Error("ElseIf must be used within a Conditional");
    var conditionMet = context.conditionMet, setConditionMet = context.setConditionMet;
    var shouldRender = condition && !conditionMet;
    useEffect(function () {
        if (shouldRender)
            setConditionMet(true);
    }, [shouldRender, setConditionMet]);
    return shouldRender ? React.createElement(React.Fragment, null, children) : null;
};
export var Else = function (_a) {
    var children = _a.children;
    var context = useContext(ConditionContext);
    if (!context)
        throw new Error("Else must be used within a Conditional");
    var conditionMet = context.conditionMet;
    return !conditionMet ? React.createElement(React.Fragment, null, children) : null;
};
