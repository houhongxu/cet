import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Taro from "@tarojs/taro";
import { useState } from "react";
import ImportantReminders from "./components/ImportantReminders";
import ScoringInstructions from "./components/ScoringInstructions";
import ExamLevelSelector from "./components/ExamLevelSelector";
import TestPaperSelector from "./components/TestPaperSelector";
import ScoreInput from "./components/ScoreInput";
import CalculateButton from "./components/CalculateButton";
import ResultDisplay from "./components/ResultDisplay";
import Card from "./components/Card";
import { calculateScore } from "./utils/scoreCalculator";
import { ExamLevel } from "./utils/examLevel";
import { getListeningOptions, getReadingOptions } from "./utils/paperConfig";

export default function Index() {
  const [examLevel, setExamLevel] = useState<ExamLevel>(ExamLevel.CET4);
  const [listeningPaper, setListeningPaper] = useState<string | null>(null);
  const [readingPaper, setReadingPaper] = useState<string | null>(null);
  const [writingRaw, setWritingRaw] = useState<number | null>(null);
  const [listeningRaw, setListeningRaw] = useState<number | null>(null);
  const [readingRaw, setReadingRaw] = useState<number | null>(null);

  // 计算后的分数
  const [writingScore, setWritingScore] = useState(0);
  const [listeningScore, setListeningScore] = useState(0);
  const [readingScore, setReadingScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // 试卷选项
  const listeningOptions = getListeningOptions(examLevel);
  const readingOptions = getReadingOptions(examLevel);

  useLoad(() => {
    console.log("Page loaded.");
  });

  const handleCalculate = () => {
    // 验证是否选择了试卷
    if (!listeningPaper && !readingPaper) {
      Taro.showToast({
        title: "请选择听力试卷和阅读试卷",
        icon: "none",
        duration: 2000,
      });
      return;
    }

    if (!listeningPaper) {
      Taro.showToast({
        title: "请选择听力试卷",
        icon: "none",
        duration: 2000,
      });
      return;
    }

    if (!readingPaper) {
      Taro.showToast({
        title: "请选择阅读试卷",
        icon: "none",
        duration: 2000,
      });
      return;
    }

    // 验证是否输入了分数
    if (writingRaw === null || writingRaw === undefined) {
      Taro.showToast({
        title: "请输入写译小分",
        icon: "none",
        duration: 2000,
      });
      return;
    }

    if (listeningRaw === null || listeningRaw === undefined) {
      Taro.showToast({
        title: "请输入听力小分",
        icon: "none",
        duration: 2000,
      });
      return;
    }

    if (readingRaw === null || readingRaw === undefined) {
      Taro.showToast({
        title: "请输入阅读小分",
        icon: "none",
        duration: 2000,
      });
      return;
    }

    // 验证分数是否在合理范围内
    if (writingRaw < 0 || writingRaw > 30) {
      Taro.showToast({
        title: "写译小分应在0-30分之间",
        icon: "none",
        duration: 2000,
      });
      return;
    }

    if (listeningRaw < 0 || listeningRaw > 35) {
      Taro.showToast({
        title: "听力小分应在0-35分之间",
        icon: "none",
        duration: 2000,
      });
      return;
    }

    if (readingRaw < 0 || readingRaw > 35) {
      Taro.showToast({
        title: "阅读小分应在0-35分之间",
        icon: "none",
        duration: 2000,
      });
      return;
    }

    // 使用真实的赋分表计算
    const result = calculateScore(
      examLevel,
      writingRaw,
      listeningRaw,
      readingRaw,
      listeningPaper,
      readingPaper
    );

    setWritingScore(result.writingScore);
    setListeningScore(result.listeningScore);
    setReadingScore(result.readingScore);
    setTotalScore(result.totalScore);
  };

  const clearAllStates = () => {
    setListeningPaper(null);
    setReadingPaper(null);
    setWritingRaw(null);
    setListeningRaw(null);
    setReadingRaw(null);
    setWritingScore(0);
    setListeningScore(0);
    setReadingScore(0);
    setTotalScore(0);
  };

  const handleRetry = () => {
    clearAllStates();
  };

  const handleLevelChange = (level: ExamLevel) => {
    setExamLevel(level);
    clearAllStates();
  };

  // const subtitle =
  //   examLevel === ExamLevel.CET4
  //     ? "【基于某书赋分统计与对照表】"
  //     : "【基于某书赋分统计与对照表】";

  const hasResult = totalScore > 0;

  return (
    <View className="min-h-screen bg-gray-50 py-1">
      {/* <Header /> */}
      {/* 
      <MainTitleCard
        level={examLevel}
        subtitle={subtitle}
        onPredict={() => {}}
      /> */}

      <ImportantReminders />
      <ScoringInstructions />

      <ExamLevelSelector
        selectedLevel={examLevel}
        onLevelChange={handleLevelChange}
      />

      <TestPaperSelector
        title="听力试卷"
        icon="🎧"
        subtitle="请选择你考试时的听力难度"
        options={listeningOptions}
        selectedOption={listeningPaper}
        onSelect={setListeningPaper}
        disabled={hasResult}
      />

      <TestPaperSelector
        title="阅读试卷"
        icon="📚"
        subtitle="请选择你考试时的阅读难度"
        options={readingOptions}
        selectedOption={readingPaper}
        onSelect={setReadingPaper}
        disabled={hasResult}
      />

      <Card title="输入各部分小分" icon="📝">
        <ScoreInput
          label="写译小分"
          range="0-30分"
          value={writingRaw}
          onChange={setWritingRaw}
          noCard={true}
          isFirst={true}
          disabled={hasResult}
        />
        <ScoreInput
          label="听力小分"
          range="0-35分"
          value={listeningRaw}
          onChange={setListeningRaw}
          noCard={true}
          disabled={hasResult}
        />
        <ScoreInput
          label="阅读小分"
          range="0-35分"
          value={readingRaw}
          onChange={setReadingRaw}
          supportsHalf={true}
          noCard={true}
          disabled={hasResult}
        />
      </Card>

      {hasResult && (
        <ResultDisplay
          level={examLevel}
          listeningPaper={listeningPaper || ""}
          readingPaper={readingPaper || ""}
          writingScore={writingScore}
          listeningScore={listeningScore}
          readingScore={readingScore}
          totalScore={totalScore}
        />
      )}

      <CalculateButton
        onClick={handleCalculate}
        onRetry={handleRetry}
        hasResult={hasResult}
      />
    </View>
  );
}
