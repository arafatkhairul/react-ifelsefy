import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

// Context to manage conditional rendering state
const ConditionContext = createContext<{
  conditionMet: boolean;
  setConditionMet: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export const Conditional: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [conditionMet, setConditionMet] = useState(false);

  // Reset the condition state for each Conditional component instance
  useEffect(() => {
    setConditionMet(false);
  }, []);

  return <ConditionContext.Provider value={{ conditionMet, setConditionMet }}>{children}</ConditionContext.Provider>;
};

export const If: React.FC<{ condition: boolean; children: ReactNode }> = ({ condition, children }) => {
  const context = useContext(ConditionContext);
  if (!context) throw new Error("If must be used within a Conditional");

  const { conditionMet, setConditionMet } = context;
  const shouldRender = condition && !conditionMet;

  useEffect(() => {
    if (shouldRender) setConditionMet(true);
  }, [shouldRender, setConditionMet]);

  return shouldRender ? <>{children}</> : null;
};

export const ElseIf: React.FC<{ condition: boolean; children: ReactNode }> = ({ condition, children }) => {
  const context = useContext(ConditionContext);
  if (!context) throw new Error("ElseIf must be used within a Conditional");

  const { conditionMet, setConditionMet } = context;
  const shouldRender = condition && !conditionMet;

  useEffect(() => {
    if (shouldRender) setConditionMet(true);
  }, [shouldRender, setConditionMet]);

  return shouldRender ? <>{children}</> : null;
};

export const Else: React.FC<{ children: ReactNode }> = ({ children }) => {
  const context = useContext(ConditionContext);
  if (!context) throw new Error("Else must be used within a Conditional");

  const { conditionMet } = context;

  return !conditionMet ? <>{children}</> : null;
};
