import React, { useState } from "react";
import "./StreakView.css";

const StreakView = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false); // Estado para controlar la apertura del bottom sheet
  const [hasActiveChallenge, setHasActiveChallenge] = useState(false); // Estado para controlar si el usuario tiene un desafío activo

  const handleChallengeClick = () => {
    setIsBottomSheetOpen(true); // Abre el bottom sheet al hacer clic en el botón
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false); // Cierra el bottom sheet
  };

  return (
    <>
      <div className="header">
        <span>Días de racha</span>
      </div>
      <div className="streak-view">
        <div className="streak-days">
          <div className="streak-day">
            <span className="streak-count">5</span>
            <span className="streak-label">Días de racha</span>
          </div>
          <div className="streak-icon">
            <img
              src={process.env.PUBLIC_URL + "/rocket.png"}
              alt="Cohete"
              style={{
                width: "74px",
                height: "72px",
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>
        <p className="section-subtitle">Desafío de Racha</p>
        {hasActiveChallenge ? (
          <p>Not implemented yet</p>
        ) : (
          <div className="streak-challenge">
            <div className="streak-icon">
              <img
                src={process.env.PUBLIC_URL + "/assets/calendar.svg"}
                alt="Calendar"
                style={{
                  width: "98px",
                  height: "64px",
                  backgroundColor: "transparent",
                }}
              />
            </div>
            <div className="challenge-container">
              <span className="challenge-text">
                ¡Mantén tu racha y gana puntos!
              </span>
              <button
                className="challenge-button"
                onClick={handleChallengeClick}
              >
                Aceptar el desafío
              </button>
            </div>
          </div>
        )}

        <p className="section-subtitle">Progreso</p>
        <div className="progress">
          <div className="progress-item">
            <div
              style={{
                backgroundColor: "#07E98A",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <span className="progress-count">7</span>
              <span className="progress-label">Días de práctica</span>
            </div>
          </div>
          <div className="progress-item">
            <div
              style={{
                backgroundColor: "#D5AB00",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <span className="progress-count">3</span>
              <span className="progress-label">Protectores usados</span>
            </div>
          </div>
        </div>

        <div className="calendar">
          <div className="calendar-header">
            <button className="calendar-nav">{"<"}</button>
            <span className="calendar-month">Agosto</span>
            <button className="calendar-nav">{">"}</button>
          </div>
          <div className="calendar-grid">
            {["D", "L", "M", "M", "J", "V", "S"].map((day, index) => (
              <span key={index} className="calendar-day">
                {day}
              </span>
            ))}
            {Array.from({ length: 31 }).map((_, index) => (
              <span
                key={index}
                className={`calendar-date ${
                  index === 1 || index === 2 || index === 3 ? "date-active" : ""
                } ${index === 4 || index === 5 ? "date-protector" : ""}`}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>

        <div className="streak-protector">
          <img
            src={process.env.PUBLIC_URL + "/assets/gem.png"}
            alt="Gem"
            style={{
              width: "88px",
              height: "88px",
              backgroundColor: "transparent",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span className="protector-text">Protector de racha</span>
            <span className="protector-description">
              Completa 1 reto diario y obtén puntos para comprar protectores
            </span>
            <button className="protector-button">Completar reto</button>
          </div>
        </div>
      </div>

      {isBottomSheetOpen && (
        <>
          <div className="backdrop" onClick={handleCloseBottomSheet}></div>
          <div className="bottom-sheet">
            <div className="bottom-sheet-content">
              <span className="bottom-sheet-title">Desafío de racha</span>
              <p className="bottom-sheet-description">
                ¡Mantén tu racha por 21 días y podrás ganar hasta{" "}
                <span style={{ color: "#07E98A" }}>100 puntos!</span>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "30px 0",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/calendar.svg"}
                  alt="Calendar"
                  style={{
                    width: "150px",
                    height: "100px",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
              <div className="bottom-sheet-buttons">
                <button
                  className="accept-button"
                  onClick={() => {
                    setHasActiveChallenge(true);
                    handleCloseBottomSheet();
                  }}
                >
                  Aceptar el desafío
                </button>
                <button
                  className="decline-button"
                  onClick={handleCloseBottomSheet}
                >
                  No, gracias
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StreakView;
