import React, {Component} from 'react';
import styles from './Header.css';
import iconNew from '../../../../resources/img/icons/icon-new.svg';
import iconOpen from '../../../../resources/img/icons/icon-open.svg';
import iconSave from '../../../../resources/img/icons/icon-save.svg';
import iconExport from '../../../../resources/img/icons/icon-export.svg';
import iconProfile from '../../../../resources/img/icons/icon-profile.svg';
import AppLogo from "../../atoms/AppLogo";

type HeaderProps = {

};

type HeaderState = {
    showedProfileMenu: boolean
}

class Header extends Component<HeaderProps, HeaderState>{
	constructor(props: HeaderProps){
		super(props);

		this.state = {
			showedProfileMenu: false,
		};
	}

    handleNewFile = () => {
        console.log("new file")
    };
    
	/**
	 * open file handler
	 * invoke common lib function with the param as setOpenPath redux action.
	 */
	handleOpenFile = () => {
        console.log("open file")
	};

	/**
	 * click the save button
	 */
	handleClickSave = () => {
		console.log("file save")
	};

	/**
	 * just remove the open path in redux state
	 */
	handleExportFile = () => {
		console.log("file export")
	};

	handleToggleProfileMenu = () => {
		this.setState({showedProfileMenu: !this.state.showedProfileMenu});
	};

	handleHideProfileMenu = () => {
		this.setState({showedProfileMenu: false});
	};

	handleChangePassword = () => {
		console.log("changed password")
	};

	handleLogout = () => {
		console.log("logout")
	};

	render(){

		return (
			<div className={styles.headerWrapper}>
                <AppLogo/>
                <div className={styles.headerIconMenu} onClick={this.handleNewFile}>
					<div className={styles.headerIconMenuImage}>
						<img src={iconNew} alt={"new"}/>
					</div>
					<div className={styles.headerIconMenuText}>
						new
					</div>
				</div>
				<div className={styles.headerIconMenu} onClick={this.handleOpenFile}>
					<div className={styles.headerIconMenuImage}>
						<img src={iconOpen} alt={"open"}/>
					</div>
					<div className={styles.headerIconMenuText}>
						open
					</div>
				</div>
				<div
					className={styles.headerIconMenu}
					onClick={this.handleClickSave} >
					<div className={styles.headerIconMenuImage}>
						<img src={iconSave} alt={"save"}/>
					</div>
					<div className={styles.headerIconMenuText}>
						save
					</div>
				</div>
				<div className={styles.headerIconMenu} onClick={this.handleExportFile}>
					<div className={styles.headerIconMenuImage}>
						<img src={iconExport} alt={"export"}/>
					</div>
					<div className={styles.headerIconMenuText}>
						export
					</div>
				</div>
				<div className={styles.headerIconMenuRight} onClick={this.handleToggleProfileMenu}>
					<div className={styles.headerIconMenuImage}>
						<img src={iconProfile} alt={"profile"}/>
					</div>
					<div className={styles.headerIconMenuText}>
						profile
					</div>
				</div>
				<div className={styles.headerProfileMenuWrapper}
						 style={{display: this.state.showedProfileMenu ? "block" : "none"}}
						 onMouseLeave={this.handleHideProfileMenu} onClick={this.handleHideProfileMenu}>
					<div className={styles.headerProfileMenuItem} onClick={this.handleChangePassword}>Change Password</div>
					<div className={styles.headerProfileMenuItem} onClick={this.handleLogout}>Logout</div>
				</div>
			</div>
		);
	}
}

export default Header;
