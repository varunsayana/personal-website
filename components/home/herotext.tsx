"use client";

const herotitle = {
    color: "white",
    alignContent: "center",
    fontSize: "6rem",
    fontWeight: "bold"
}

const herosubtitle = {
    color: "white",
    alignContent: "center",

}

export default function HeroText() {
    return (
        <div>
            <div style={herotitle}>

                <h1>Hey I'm Varun👋</h1>

            </div>

            <div style={herosubtitle}>

                <p>AI/ML + Full Stack Developer  |📍Atlanta, United States</p>

            </div>

        </div>
    );
}
