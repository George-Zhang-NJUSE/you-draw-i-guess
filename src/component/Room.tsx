import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { ChatBoard } from './ChatBoard';
import { PaintBoard } from './PaintBoard';

type StateProps = {
};

type DispatchProps = {
};

type Props = StateProps & DispatchProps;

class RoomComponent extends React.Component<Props> {

  render() {
    return (
      <div>
        <PaintBoard />
        <ChatBoard />
      </div>
    );
  }
}

const mapState = (state: RootState): StateProps => ({
  
});

const mapDispatch = (dispatch: any): DispatchProps => ({

});

export const Room = connect<StateProps, DispatchProps>(mapState, mapDispatch)(RoomComponent);
