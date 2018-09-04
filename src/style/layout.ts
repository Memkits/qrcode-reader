import { css, cx } from "emotion";

// demos related to this layout solution  http://ui.respo.site/layouts.html

export const fullscreen = css`
  position: absolute;
  background-color: white;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const minHeight = css`
  min-height: 100%;
`;

export const row = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const inlineRow = css`
  display: inline-flex;
  flex-direction: row;
  align-items: stretch;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const column = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const rowCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const center = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 用于 toolbar, 两个子元素分别位于两端, 或者借助空节点进行右对齐
export const rowParted = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const flex = css`
  flex: 1;
`;

export const displayFlex = css`
  display: flex;
`;

export const displayBlock = css`
  display: block;
`;

export const flexWrap = css`
  flex-wrap: wrap;
`;

export const alignItemCenter = css`
  align-items: center;
`;

export const alignItemBottom = css`
  align-items: flex-end;
`;

export const noShrink = css`
  flex-shrink: 0;
`;
