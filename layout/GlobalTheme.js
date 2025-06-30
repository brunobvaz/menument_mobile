import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');

export const COLORS = {
    primary: "#FE9063",
    primary2: "#14b987",
    primary3: "#337bff",
    primary4: "#ff50a2",
    white: "#fff",
    orangeWhite: '#F9F7F4',
    orangeDark: '#D6582A',
    text: "rgba(0,0,0,.7)",
    danger: "#ff4a5c",
    placeholderColorGray: "#A0A0A0",
    borderColor: "#E6E6E6",
    lightGrayColor: '#E6E6E6',
    textLight: "rgba(0,0,0,.5)",
    primaryColor: '#AD1457',
    title: "#2F2F2F",
    cardBg: "#fff",
    gray: "#d4d4d4"
    /*  primary2 : "#14b987",
      primary3 : "#337bff",
      primary4 : "#ff50a2",
      primary5 : "#577bff",
      primary6 : "#4053FF",
      primary7 : "#00AB8C",
      yellow  : "#FFCD90",
      secondary : "#704FFE",
      success : "#54D969",
      danger  : "#ff4a5c",
      warning : "#ffb02c",
      white   : "#fff",
      orangeWhite: '#F9F7F4',
      orangeDark: '#D6582A',
      info : "#4cb1ff",
      text : "rgba(0,0,0,.7)",
      primayLight : "rgba(255,144,99,.13)",
      primayLight2 : "rgba(0,196,132,.12)",
      primayLight3 : "rgba(51,123,255,.15)",
      primayLight4 : "rgba(255,80,162,.2)",
      primayLight5 : "rgba(87,123,255,.2)",
      textLight : "rgba(0,0,0,.5)",
      title : "#2F2F2F",
      dark : "#2f2f2f",
      light : "#E6E6E6",
      borderColor : "#E6E6E6",
      darkBorder : "rgba(255, 255, 255, 0.2)",
      darkBg : "#2c3f6d",
      placeholderColor : "#646464",
      red : "#f85c6f",
      redLight : "rgba(248,92,111,.2)",
      themePrimary : "#1630C2",
      themeSecondary : "#FF74B9",
      placeholderColorGray: "#A0A0A0",
      primaryColor: '#AD1457',
      whiteColor: '#FFFFFF',
      blackColor: '#000000',
      orangeColor: '#FFAC33',
      grayColor: '#949494',
      lightGrayColor: '#E6E6E6',
      darkGrayColor: '#333333',
      purpleColor: '#7B1FA2',
      redColor: '#D32F2F',
      blueColor: '#1976D2',
      cyanColor: '#0097A7',
      greenColor: '#388E3C',
      cardBg : "#fff",
    */
}

export const SIZES = {
    fontLg: 16,
    font: 14,
    fontSm: 13,
    fontXs: 12,

    //radius
    radius_sm: 8,
    radius: 12,
    radius_md: 18,

    //space
    PADDING_BASE: 15,
    MARGIN_BASE: 15,


    //Font Sizes
    h1: 40,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 18,
    h6: 16,

    //App dimensions

    SCREEN_HEIGHT: height,

    width,
    height,

    container: 800,

};

export const FONTS = {

    fontPoppins: { fontFamily: 'PoppinsSemiBold' },
    fontNunito: { fontFamily: 'NunitoSansRegular' },

    fontLg: { fontSize: SIZES.fontLg, color: COLORS.text, lineHeight: 20, fontFamily: 'NunitoSansBold' },
    font: { fontSize: SIZES.font, color: COLORS.text, lineHeight: 20, fontFamily: 'NunitoSansRegular' },
    fontSm: { fontSize: SIZES.fontSm, color: COLORS.text, lineHeight: 18, fontFamily: 'NunitoSansRegular' },
    fontXs: { fontSize: SIZES.fontXs, color: COLORS.text, lineHeight: 14, fontFamily: 'NunitoSansRegular' },
    h1: { fontSize: SIZES.h1, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
    h2: { fontSize: SIZES.h2, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
    h3: { fontSize: SIZES.h3, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
    h4: { fontSize: SIZES.h4, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
    h5: { fontSize: SIZES.h5, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
    h6: { fontSize: SIZES.h6, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },

    fontBold: { fontFamily: 'NunitoSansBold' },

}

export const ICONS = {
    user: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    heartFill: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3667 3.84166C16.9411 3.41583 16.4357 3.07803 15.8795 2.84757C15.3233 2.6171 14.7271 2.49847 14.1251 2.49847C13.523 2.49847 12.9268 2.6171 12.3706 2.84757C11.8144 3.07803 11.309 3.41583 10.8834 3.84166L10.0001 4.725L9.11672 3.84166C8.25698 2.98192 7.09092 2.49892 5.87506 2.49892C4.6592 2.49892 3.49313 2.98192 2.63339 3.84166C1.77365 4.70141 1.29065 5.86747 1.29065 7.08333C1.29065 8.29919 1.77365 9.46525 2.63339 10.325L3.51672 11.2083L10.0001 17.6917L16.4834 11.2083L17.3667 10.325C17.7926 9.89936 18.1303 9.39401 18.3608 8.83779C18.5913 8.28157 18.7099 7.6854 18.7099 7.08333C18.7099 6.48125 18.5913 5.88508 18.3608 5.32887C18.1303 4.77265 17.7926 4.26729 17.3667 3.84166V3.84166Z" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    eyeOpen: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8475 7.43335C23.6331 7.1411 18.5245 0.277466 11.9999 0.277466C5.47529 0.277466 0.366469 7.1411 0.152297 7.43307C-0.0507657 7.71032 -0.0507657 8.08637 0.152297 8.36362C0.366469 8.65587 5.47529 15.5195 11.9999 15.5195C18.5245 15.5195 23.6331 8.65582 23.8475 8.36386C24.0508 8.08665 24.0508 7.71032 23.8475 7.43335ZM11.9999 13.9427C7.19382 13.9427 3.03127 9.38722 1.79907 7.89795C3.02968 6.40737 7.18351 1.85422 11.9999 1.85422C16.8057 1.85422 20.968 6.40896 22.2007 7.89902C20.9701 9.38955 16.8162 13.9427 11.9999 13.9427Z" fill="#FE9063"/><path d="M11.9998 3.16821C9.38224 3.16821 7.25256 5.29005 7.25256 7.89801C7.25256 10.506 9.38224 12.6278 11.9998 12.6278C14.6174 12.6278 16.7471 10.506 16.7471 7.89801C16.7471 5.29005 14.6174 3.16821 11.9998 3.16821ZM11.9998 11.0512C10.2547 11.0512 8.83502 9.6367 8.83502 7.89801C8.83502 6.15932 10.2547 4.74484 11.9998 4.74484C13.7449 4.74484 15.1646 6.15932 15.1646 7.89801C15.1646 9.6367 13.745 11.0512 11.9998 11.0512Z" fill="#FE9063"/></svg>`,
    eyeClose: `<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8475 10.4333C23.6331 10.1411 18.5245 3.27747 11.9999 3.27747C5.47529 3.27747 0.366469 10.1411 0.152297 10.4331C-0.0507657 10.7103 -0.0507657 11.0864 0.152297 11.3636C0.366469 11.6559 5.47529 18.5195 11.9999 18.5195C18.5245 18.5195 23.6331 11.6558 23.8475 11.3639C24.0508 11.0866 24.0508 10.7103 23.8475 10.4333ZM11.9999 16.9427C7.19382 16.9427 3.03127 12.3872 1.79907 10.8979C3.02968 9.40737 7.18351 4.85422 11.9999 4.85422C16.8057 4.85422 20.968 9.40896 22.2007 10.899C20.9701 12.3896 16.8162 16.9427 11.9999 16.9427Z" fill="#FE9063"/><path d="M11.9998 6.16821C9.38224 6.16821 7.25256 8.29005 7.25256 10.898C7.25256 13.506 9.38224 15.6278 11.9998 15.6278C14.6174 15.6278 16.7471 13.506 16.7471 10.898C16.7471 8.29005 14.6174 6.16821 11.9998 6.16821ZM11.9998 14.0512C10.2547 14.0512 8.83502 12.6367 8.83502 10.898C8.83502 9.15932 10.2547 7.74484 11.9998 7.74484C13.7449 7.74484 15.1646 9.15932 15.1646 10.898C15.1646 12.6367 13.745 14.0512 11.9998 14.0512Z" fill="#FE9063"/><path d="M5 1L18.5 20" stroke="#FE9063" stroke-width="2"/></svg>`,
}

export const IMAGES = {

    // user1: require('../assets/images/profile.png'),
    // foodPattern1 : require('../assets/images/pattern/pattern1.png'),
}


const appTheme = { COLORS, SIZES, FONTS, ICONS, IMAGES }

export default appTheme;