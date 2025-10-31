import { Text, View } from "react-native";
import { useResolveClassNames } from "uniwind";

export default function Demo() {
  const a = useResolveClassNames("ease-linear");
  const b = useResolveClassNames("ease-in");
  const c = useResolveClassNames("ease-out");
  const d = useResolveClassNames("ease-in-out");
  const e = useResolveClassNames("ease-initial");
  const f = useResolveClassNames("ease-[cubic-bezier(0.95,0.05,0.795,0.035)]");

  console.log({ a, b, c, d, e, f }); // = {"transitionTimingFunction": "linear"} {"transitionTimingFunction": ""} {"transitionTimingFunction": ""} {"transitionTimingFunction": ""} {} {"transitionTimingFunction": ""}

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
