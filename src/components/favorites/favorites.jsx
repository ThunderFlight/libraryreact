import classNames from "classnames";
import { useState } from "react";
import autumnCasual from "../../images/autumnBookCasual.jpg";
import autumnGreatFire from "../../images/autumnBookGreatFire.jpg";
import autumnRickey from "../../images/autumnBookRickey.jpg";
import autumnSlug from "../../images/autumnBookSlug.jpg";
import springCarry from "../../images/springBookCarry.jpg";
import springDays from "../../images/springBookDistraction.jpg";
import springDominicana from "../../images/springBookDominicana.jpg";
import springStephen from "../../images/springBookStephen.jpg";
import summerCrude from "../../images/summerBookGrude.jpg";
import summerOctopus from "../../images/summerBookOctopus.jpg";
import summerShark from "../../images/summerBookShark.jpg";
import summerSurfing from "../../images/summerBookSurfing.jpg";
import winterDante from "../../images/winterBookDante.jpg";
import winterEasters from "../../images/winterBookEaters.jpg";
import winterQueen from "../../images/winterBookQueen.jpg";
import winterRachel from "../../images/winterBookRachel.jpg";
import { H2Title } from "../common/h2Title/h2Title";
import styles from "./favorites.module.scss";
export const Favorites = () => {
  const [check, setCheck] = useState("winter");
  let arrOfBooks = [
    {
      winter: [
        {
          from: "Staff Picks",
          name: "The Book Eaters",
          author: "By Sunyi Dean",
          description:
            "An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.",
          src: winterEasters,
        },
        {
          from: "Staff Picks",
          name: "Cackle",
          author: "By Rachel Harrison",
          description:
            "Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.",
          src: winterRachel,
        },
        {
          from: "Staff Picks",
          name: "Dante: Poet of the Secular World",
          author: "By Erich Auerbach",
          description:
            "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.",
          src: winterDante,
        },
        {
          from: "Staff Picks",
          name: "The Last Queen",
          author: "By Clive Irving",
          description:
            "A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.",
          src: winterQueen,
        },
      ],
    },

    {
      spring: [
        {
          from: "Staff Picks",
          name: "The Body",
          author: "By Stephen King",
          description:
            "Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.",
          src: springStephen,
        },
        {
          from: "Staff Picks",
          name: "Carry: A Memoir of Survival on Stolen Land ",
          author: "By Toni Jenson",
          description:
            "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.",
          src: springCarry,
        },
        {
          from: "Staff Picks",
          name: "Days of Distraction ",
          author: "By Alexandra Chang",
          description:
            "A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.",
          src: springDays,
        },
        {
          from: "Staff Picks",
          name: "Dominicana ",
          author: "By Angie Cruz",
          description:
            "A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.",
          src: springDominicana,
        },
      ],
    },

    {
      summer: [
        {
          from: "Staff Picks",
          name: "Crude: A Memoir",
          author: "By Pablo Fajardo &amp; ​​Sophie Tardy-Joubert",
          description:
            "Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people",
          src: summerCrude,
        },
        {
          from: "Staff Picks",
          name: "Let My People Go Surfing",
          author: "By Yvon Chouinard",
          description:
            "Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.",
          src: summerSurfing,
        },
        {
          from: "Staff Picks",
          name: "The Octopus Museum: Poems",
          author: "By Brenda Shaughnessy",
          description:
            "This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.",
          src: summerOctopus,
        },
        {
          from: "Staff Picks",
          name: "Shark Dialogues: A Novel",
          author: "By Kiana Davenport",
          description:
            "An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.",
          src: summerShark,
        },
      ],
    },
    {
      autumn: [
        {
          from: "Staff Picks",
          name: "Casual Conversation",
          author: "By Renia White",
          description:
            "White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity. ",
          src: autumnCasual,
        },
        {
          from: "Staff Picks",
          name: "The Great Fire",
          author: "By Lou Ureneck",

          description:
            "The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide",
          src: autumnGreatFire,
        },
        {
          from: "Staff Picks",
          name: "Rickey: The Life and Legend",
          author: "By Howard Bryant",
          description:
            "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?",
          src: autumnRickey,
        },
        {
          from: "Staff Picks",
          name: "Slug: And Other Stories",
          author: "By Megan Milks",
          description:
            "Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.",
          src: autumnSlug,
        },
      ],
    },
  ];
  const checkRadioBtn = (e) => {
    setCheck(e.target.value);
  };
  return (
    <section className={styles.favorites}>
      <H2Title>Favorites</H2Title>

      <div className={styles.seasonBooks}>
        <p>Pick favorites of season</p>
        <span className={styles.seasonBooks__pagination}>
          <input
            type="radio"
            id="Winter"
            name="seasons"
            value={"winter"}
            onChange={checkRadioBtn}
            checked={check === "winter" ? true : false}
          />
          <label htmlFor="Winter">Winter</label>
          <input
            type="radio"
            id="Spring"
            name="seasons"
            value={"spring"}
            onChange={checkRadioBtn}
            checked={check === "spring" ? true : false}
          />
          <label htmlFor="Spring">Spring</label>
          <input
            type="radio"
            id="Summer"
            name="seasons"
            value={"summer"}
            onChange={checkRadioBtn}
            checked={check === "summer" ? true : false}
          />
          <label htmlFor="Summer">Summer</label>
          <input
            type="radio"
            id="Autumn"
            name="seasons"
            value={"autumn"}
            onChange={checkRadioBtn}
            checked={check === "autumn" ? true : false}
          />
          <label htmlFor="Autumn">Autumn</label>
        </span>
        <div className={styles.seasonBooks__preViewBooks}>
          {arrOfBooks.map((item) => {
            for (let key in item) {
              if (check === key) {
                return item[key].map((book) => {
                  console.log(book.author);
                  return (
                    <div className={styles.cover}>
                      <h3 className={styles.cover__from}>{book.from}</h3>
                      <div className={styles.cover__lineGold}></div>
                      <h4
                        className={classNames(
                          styles.cover__name,
                          styles.nameAndAuthor
                        )}>
                        {book.name}
                      </h4>
                      <h4
                        className={classNames(
                          styles.cover__author,
                          styles.nameAndAuthor
                        )}>
                        {book.author}
                      </h4>
                      <p
                        className={classNames(
                          styles.cover__description,
                          styles.nameAndAuthor
                        )}>
                        {book.description}
                      </p>
                      <button className={styles.cover__btnBuy}>Buy</button>
                      <img src={book.src} className={styles.cover__image} />
                    </div>
                  );
                });
              }
            }
          })}
        </div>
      </div>
    </section>
  );
};
