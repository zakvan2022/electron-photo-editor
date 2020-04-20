import React, { Component } from 'react';
import stylesMainHeader from "./AppLogo.css";
import imgLogo from "../../../../resources/img/icons/logo.svg";

class AppLogo extends Component{
	render(){
		return (
			<>
				<div className={stylesMainHeader.headerImageLogo}>
					<img src={imgLogo} alt={"logo"}/>
				</div>
				<div className={stylesMainHeader.headerTextLogo}>
					<div className={stylesMainHeader.headerTextLogoMain}>
						SKETCHER
					</div>
					<div className={stylesMainHeader.headerTextLogoSub}>
						by <strong>DOODLY</strong>
					</div>
				</div>
			</>
		);
	}
}

export default AppLogo;
