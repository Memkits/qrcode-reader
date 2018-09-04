import React from "react";
import { css, cx } from "emotion";
import produce from "immer";
import QrReader from "react-qr-reader";
import { fullscreen, column, flex, center, rowCenter } from "style/layout";
import Space from "kits/space";
import copy from "copy-text-to-clipboard";

interface IProps {}

interface IState {
  content: string;
  showTip: boolean;
}

export default class Home extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      content: null,
      showTip: false,
    };
  }

  immerState(f: (s: IState) => void) {
    this.setState(produce<IState>(f));
  }

  render() {
    let { content } = this.state;
    let hasData = content != null;

    return (
      <div className={cx(fullscreen, column)}>
        <QrReader
          delay={140}
          onError={(error) => {
            console.error(error);
          }}
          onScan={(data) => {
            if (data != null) {
              this.immerState((state) => {
                state.content = data;
              });
            }
          }}
          style={{ width: "100%" }}
        />
        {hasData ? (
          <div className={cx(flex, center)}>
            <div className={styleContent}>{this.state.content}</div>
            <Space height={16} />
            {this.renderButtons(content)}
          </div>
        ) : (
          <div className={cx(flex, center)}>
            <div className={styleEmpty}>Nothing</div>
          </div>
        )}

        {this.state.showTip ? this.renderTip() : null}
      </div>
    );
  }

  renderButtons(content) {
    return (
      <div className={rowCenter}>
        <div
          className={styleButton}
          onClick={() => {
            try {
              window.open(`googlechrome://navigate?url=${content}`);
            } catch (error) {
              console.error("Failed to open Chrome", error);
              window.open(content);
            }
          }}
        >
          Open
        </div>
        <Space width={16} />
        <div
          className={styleButton}
          onClick={() => {
            copy(content);
            this.immerState((state) => {
              state.showTip = true;
              setTimeout(() => {
                this.immerState((state) => {
                  state.showTip = false;
                });
              }, 1200);
            });
          }}
        >
          Copy
        </div>
      </div>
    );
  }

  renderTip() {
    return <div className={cx(center, styleTip)}>Copied</div>;
  }
}

const styleButton = css`
  line-height: 32px;
  padding: 0 16px;
  border-radius: 16px;
  border: 1px solid #ddd;
  color: #888;

  cursor: pointer;
`;

const styleEmpty = css`
  color: #ddd;
`;

const styleContent = css`
  white-space: nowrap;
  font-family: Menlo, Roboto mono, monospace;
  overflow: hidden;
  font-size: 12px;
`;

const styleTip = css`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 48px;
  background-color: black;
  color: white;
`;
