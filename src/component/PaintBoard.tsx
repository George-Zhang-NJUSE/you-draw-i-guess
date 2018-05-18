import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';

type StateProps = {
};

type DispatchProps = {
};

type Props = StateProps & DispatchProps;

class PaintBoardComponent extends React.Component<Props> {

  render() {
    return (
      <div>
        painter
      </div>
    );
  }
}

const mapState = (state: RootState): StateProps => ({
  
});

const mapDispatch = (dispatch: any): DispatchProps => ({

});

export const PaintBoard = connect<StateProps, DispatchProps>(mapState, mapDispatch)(PaintBoardComponent);
