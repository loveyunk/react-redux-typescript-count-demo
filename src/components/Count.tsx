import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/count/actions';
import { AppState } from '../store/index';

export interface CountProps {
  count: number;
  onIncrement: () => {};
  onDecrement: () => {};
}

class Count extends React.Component<CountProps, {}> {
  render() {
    const { count, onDecrement, onIncrement } = this.props;

    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = ({ count }: AppState) => ({
  ...count
});

const mapDispatchToProps = (dispatch: any) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Count);
