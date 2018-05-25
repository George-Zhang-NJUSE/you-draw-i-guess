import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { TouchEventHandler } from 'react';

type StateProps = {
};

type DispatchProps = {
};

type Props = StateProps & DispatchProps;

type PaintPoint = {
  x: number
  y: number
  id: number
};

class PaintBoardComponent extends React.Component<Props> {

  canvasRef = React.createRef<HTMLCanvasElement>();
  lastPoints: PaintPoint[] = [];  // 上一个点，用于将用户触摸的坐标连成线

  /**
   * 根据触摸的viewPort坐标获取其在canvas内的坐标
   */
  getCanvasCoordinates(touch: React.Touch) {
    const canvas = this.canvasRef.current!;
    const box = canvas.getBoundingClientRect();
    return {
      x: touch.clientX - box.left,
      y: touch.clientY - box.top
    };
  }

  handleTouchMove: TouchEventHandler<HTMLCanvasElement> = (e) => {
    const touches = Array.from(e.changedTouches);
    const canvas = this.canvasRef.current!;
    const context = canvas.getContext('2d');

    if (context) {
      touches.forEach(touch => {
        const lastPoint = this.lastPoints.find(p => p.id === touch.identifier);
        if (!lastPoint) {
          return;
        }

        const { x, y } = this.getCanvasCoordinates(touch);
        context.beginPath();
        context.moveTo(lastPoint.x, lastPoint.y);
        context.lineTo(x, y);
        context.stroke();

        lastPoint.x = x;
        lastPoint.y = y;
      });
    }
  }

  handleTouchAbort: TouchEventHandler<HTMLCanvasElement> = (e) => {
    const touches = Array.from(e.changedTouches);
    touches.forEach(t => {
      // 删除该手指对应的点
      const index = this.lastPoints.findIndex(point => point.id === t.identifier);
      this.lastPoints.splice(index, 1);
    });
  }

  handleTouchStart: TouchEventHandler<HTMLCanvasElement> = (e) => {
    const touches = Array.from(e.changedTouches);
    this.lastPoints.push(...touches.map(t => ({
      id: t.identifier,
      ...this.getCanvasCoordinates(t)
    })));
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        onTouchMove={this.handleTouchMove}
        onTouchCancel={this.handleTouchAbort}
        onTouchEnd={this.handleTouchAbort}
        onTouchStart={this.handleTouchStart}
      />
    );
  }
}

const mapState = (state: RootState): StateProps => ({

});

const mapDispatch = (dispatch: any): DispatchProps => ({

});

export const PaintBoard = connect<StateProps, DispatchProps>(mapState, mapDispatch)(PaintBoardComponent);
