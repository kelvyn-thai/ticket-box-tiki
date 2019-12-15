import styled from "styled-components";

export const StyledFonts = styled.div`
  @font-face {
    font-family: MavenPro-Black;
    src: url(fonts/maven-pro/MavenPro-Black.ttf);
  }
  @font-face {
    font-family: MavenPro-Regular;
    src: url(fonts/maven-pro/MavenPro-Regular.ttf);
  }
  @font-face {
    font-family: MavenPro-Bold;
    src: url(fonts/maven-pro/MavenPro-Bold.ttf);
  }
`;

export const Styled = styled(StyledFonts)`
  &.open-popup {
    overflow: hidden;
    max-height: 100vh;
    height: 100vh;
  }
  * {
    font-family: MavenPro-Regular;
    color: #fff;
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .btn {
      background: #189eff;
      color: #fff;
      font-family: MavenPro-Bold;
      font-size: 16px;
      max-width: 100%;
      height: 40px;
      line-height: 40px;
      border-radius: 4px;
      &.disabled {
        opacity: 0.5;
      }
    }
  }
`;
