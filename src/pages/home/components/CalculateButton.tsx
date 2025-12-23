import { View, Text } from "@tarojs/components";

interface CalculateButtonProps {
  onClick: () => void;
  onRetry: () => void;
  hasResult?: boolean;
}

export default function CalculateButton({
  onClick,
  onRetry,
  hasResult = false,
}: CalculateButtonProps) {
  return (
    <View
      className="mx-4 my-3 text-white rounded-xl py-4 px-4 flex items-center justify-center gap-2 active:opacity-80"
      style={{
        background: "linear-gradient(to right, #f472b6, #db2777)",
      }}
      onClick={hasResult ? onRetry : onClick}
    >
      <Text className="text-lg">{hasResult ? "🔄" : "🧮"}</Text>
      <Text className="text-white font-bold text-lg">
        {hasResult ? "重新估分" : "开始估分"}
      </Text>
    </View>
  );
}
