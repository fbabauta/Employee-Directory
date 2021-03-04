import React from "react";

const style = {
    icon: {
        padding: "10px 3px 3px 3px"
    },

    footer: {
        backgroundColor: "#228ff1",
        color: "white",
        padding: "15px",
    },

    text: {
        fontWeight: "100",
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: .5
    }
};

class Footer extends React.Component {
    render() {
        return (
            <footer className="uk-text-center uk-text-middle footer" style={style.footer}>
                <span style={style.text}> © Francine Babauta</span><br />
                <a uk-icon="icon: github" href="https://github.com/fbabauta" className="contact-icon contact-link-icon" target="_blank" style={style.icon}></a>
                <a uk-icon="icon: mail" className="contact-icon contact-link-icon" href="mailto:francine.babauta@outlook.com" style={style.icon}></a>
                <a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/francine-babauta/" target="_blank" className="contact-icon contact-link-icon" style={style.icon}></a>
            </footer>
        )
    }
};

export default Footer;