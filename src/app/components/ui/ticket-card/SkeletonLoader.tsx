import React from "react";
// Components
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// Types
import { ISkeletonLoader } from "./types";
// Styles
import styles from "./TicketCard.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader: React.FC<ISkeletonLoader> = ({ amount }) => {
  const skeletonArray = Array.from(Array(amount).keys());

  return (
    <SkeletonTheme
      baseColor="#9ea9b7"
      highlightColor="#dfe5ec"
      borderRadius="5px"
      duration={4}
    >
      {skeletonArray.map((number) => {
        return (
          <Skeleton
            key={number}
            className={styles.skeletonCard}
            enableAnimation
          />
        );
      })}
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
