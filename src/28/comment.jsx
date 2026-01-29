import { Time } from "./time";

export function Comment({ text }) {
  return (
    <div className="comment">
      <p>Comment: {text}</p>

      Time: <Time />
    </div>
  );
}
