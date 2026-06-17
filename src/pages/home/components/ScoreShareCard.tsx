import { Button, Text, View } from "@tarojs/components";
import { ExamLevel } from "../utils/examLevel";

interface ScoreShareCardProps {
  level: ExamLevel;
  listeningPaper: string;
  readingPaper: string;
  writingScore: number;
  listeningScore: number;
  readingScore: number;
  totalScore: number;
  onShareClick: () => void;
}

export default function ScoreShareCard({
  level,
  listeningPaper,
  readingPaper,
  writingScore,
  listeningScore,
  readingScore,
  totalScore,
  onShareClick,
}: ScoreShareCardProps) {
  const levelText = level === ExamLevel.CET4 ? "英语四级" : "英语六级";
  const passText = totalScore >= 425 ? "已达到425分线" : "距离425分继续冲刺";

  return (
    <View className="bg-white rounded-2xl p-4 mt-4 shadow-sm">
      <View
        className="rounded-2xl p-5 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #db2777 55%, #f97316 100%)",
        }}
      >
        <View className="flex items-center justify-between mb-5">
          <View>
            <Text className="text-white text-sm opacity-90">四六级估分卡</Text>
            <Text className="block text-white text-xl font-bold mt-1">{levelText}</Text>
          </View>
          <View className="bg-white bg-opacity-20 rounded-full px-3 py-1">
            <Text className="text-white text-xs">{passText}</Text>
          </View>
        </View>

        <View className="flex items-end justify-between mb-5">
          <View>
            <Text className="text-white text-sm opacity-90">预估总分</Text>
            <Text className="block text-white font-bold text-5xl mt-1">{totalScore}</Text>
          </View>
          <Text className="text-white text-base mb-2">分</Text>
        </View>

        <View className="bg-white bg-opacity-15 rounded-xl p-3">
          <View className="flex items-center justify-between">
            <Text className="text-white text-sm">写译</Text>
            <Text className="text-white font-bold">{writingScore}分</Text>
          </View>
          <View className="flex items-center justify-between mt-2">
            <Text className="text-white text-sm">听力 {listeningPaper}</Text>
            <Text className="text-white font-bold">{listeningScore}分</Text>
          </View>
          <View className="flex items-center justify-between mt-2">
            <Text className="text-white text-sm">阅读 {readingPaper}</Text>
            <Text className="text-white font-bold">{readingScore}分</Text>
          </View>
        </View>
      </View>

      <Button
        className="mt-4 rounded-xl py-3 px-4 bg-green-500 text-white font-bold text-base leading-normal"
        openType="share"
        hoverClass="opacity-80"
        onClick={onShareClick}
      >
        分享我的估分卡
      </Button>
    </View>
  );
}
