import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { ChatMessage, ServerEvent, ServerEventPayload } from '../constant/constant';
import { ChangeEventHandler, FormEventHandler } from 'react';
import { socket } from '../net/socket';

type StateProps = {
  messages: ChatMessage[]
};

type DispatchProps = {
};

type Props = StateProps & DispatchProps;

type State = {
  input: string
};

class ChatBoardComponent extends React.Component<Props, State> {

  state: State = {
    input: ''
  };

  handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as any);
  }

  handleSubmitMessage: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    socket.emit(ServerEvent.CHAT, this.state.input as ServerEventPayload['CHAT']);
  }

  render() {
    const { input } = this.state;
    const { messages } = this.props;
    return (
      <div>
        <ul>
          {messages.map(m => <li key={m.createTime}>{m.user.userName}: {m.text}</li>)}
        </ul>
        <form onSubmit={this.handleSubmitMessage} onChange={this.handleInputChange as any} >
          <input type="text" name="input" value={input} />
          <input type="submit" value="↑" />
        </form>
      </div>
    );
  }
}

const mapState = (state: RootState): StateProps => ({
  messages: state.chat
});

const mapDispatch = (dispatch: any): DispatchProps => ({

});

export const ChatBoard = connect<StateProps, DispatchProps>(mapState, mapDispatch)(ChatBoardComponent);
