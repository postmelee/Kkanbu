import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div style={{ height: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ minWidth: 340, width: "100%", maxWidth: 800 }}>
        <header style={{ backgroundColor: "red", padding: "30px" }}>
          <div className="logo" style={{}}>
            <div>
              <div
                style={{ padding: "4px 8px", fontSize: 32, fontWeight: "bold" }}
              >
                깐부
              </div>
            </div>
          </div>
        </header>
        <div>
          <div
            className="banner"
            style={{ padding: "32px", backgroundColor: "blue" }}
          >
            <div
              style={{
                width: "100%",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              사진
            </div>
          </div>
        </div>
        <div>
          <div>선생님 목록</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
