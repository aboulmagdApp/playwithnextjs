import styles from "../../conference.module.css";

async function fetchSpeakerInfo(params) {
  const respones = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
    { cache: "no-store" }
  );
  const speakerInfo = await respones.json();
  return speakerInfo.speakers.find((speaker) => speaker.id == params.slug);
}

export default async function Page({ params }) {
  const speakerInfo = await fetchSpeakerInfo(params);
  console.log("params", params);
  console.log("speakerInfo", speakerInfo);
  const { id, name, bio, sessions } = speakerInfo;

  return (
    <div key={id} className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}
