import Link from "next/link";
import styles from './meals.module.css'
import MealsGrid from "@/components/meals/meals-grid";

export default function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy  and fun!
        </p>
        <p className={styles.cta}>
          <Link href='/meals/share'>
            Share your favourite recipe
          </Link>
        </p>
      </header>
      <main className={styles.main}>
          <MealsGrid meals={[]}/>
      </main>
    </>
  );
}