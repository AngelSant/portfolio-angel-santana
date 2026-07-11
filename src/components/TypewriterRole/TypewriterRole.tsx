"use client";

import { useEffect, useState } from "react";
import styles from "./TypewriterRole.module.css";

type TypewriterPhase = "typing" | "deleting";

type TypewriterRoleProps = {
  roles: string[];
};

const TYPING_SPEED = 75;
const DELETING_SPEED = 42;
const WAITING_TIME = 1500;

export function TypewriterRole({ roles }: TypewriterRoleProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<TypewriterPhase>("typing");

  const currentRole = roles[roleIndex] ?? "";

  useEffect(() => {
    if (!currentRole || roles.length === 0) {
      return;
    }

    let delay: number;
    let nextStep: () => void;

    if (phase === "typing") {
      if (text.length < currentRole.length) {
        delay = TYPING_SPEED;

        nextStep = () => {
          setText(currentRole.slice(0, text.length + 1));
        };
      } else {
        delay = WAITING_TIME;

        nextStep = () => {
          setPhase("deleting");
        };
      }
    } else if (text.length > 0) {
      delay = DELETING_SPEED;

      nextStep = () => {
        setText(currentRole.slice(0, text.length - 1));
      };
    } else {
      delay = DELETING_SPEED;

      nextStep = () => {
        setRoleIndex((currentIndex) => {
          return (currentIndex + 1) % roles.length;
        });

        setPhase("typing");
      };
    }

    const timer = window.setTimeout(nextStep, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [currentRole, phase, roles.length, text]);

  if (roles.length === 0) {
    return null;
  }

  return (
    <p className={styles.typewriter} aria-label={currentRole}>
      <span aria-hidden="true">{text}</span>

      <span className={styles.cursor} aria-hidden="true">
        |
      </span>
    </p>
  );
}
