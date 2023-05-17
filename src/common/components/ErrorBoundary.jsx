import React from "react";
import logEvent from "../../utils/logger";
import { ERROR } from "../../constants/sanityConst";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  async componentDidCatch(error, info) {
    await logEvent(ERROR, error, {
      additionalData: info.componentStack,
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
