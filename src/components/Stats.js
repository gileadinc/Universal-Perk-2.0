import { Paper, Group, Text, Title, Button } from "@mantine/core";
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconArrowUpRight,
  IconArrowDownRight,
} from "@tabler/icons-react";

const icons = {
  revenue: IconReceipt2,
  profit: IconCoin,
  coupons: IconDiscount2,
  customers: IconUserPlus,
};

const data = [
  { title: "Total Charities", icon: "revenue", value: "500", diff: 15 },
  { title: "Total Countries Covered", icon: "profit", value: "100", diff: -10 },
  { title: "Coupons Used", icon: "coupons", value: "500", diff: 20 },
  {
    title: "New Supporters For charities",
    icon: "customers",
    value: "100",
    diff: 5,
  },
];

export default function StatsGrid() {
  return (
    <div className="m-28">
      <Title
        order={2}
        className="mx-auto mb-4 text-3xl text-center dark:text-white"
      >
        Our Charity Experience
      </Title>
      <Text className="mb-10 text-center dark:text-white">
        Here are some key statistics to highlight the impact of our charity
        work.
      </Text>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {data.map((stat) => {
          const Icon = icons[stat.icon];
          const DiffIcon =
            stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

          return (
            <Paper
              key={stat.title}
              withBorder
              radius="xl"
              className="p-5 bg-blue-100 border border-gray-300 rounded-lg shadow-xl dark:border-gray-700 dark:bg-white"
            >
              <Group justify="space-between" className="mb-4">
                <Text
                  size="sm"
                  className="flex font-semibold text-gray-600 uppercase dark:text-black"
                >
                  {stat.title}
                  <Icon
                    className="ml-3 text-gray-400 dark:text-gray-600"
                    size={18}
                  />
                </Text>
              </Group>

              <Group align="flex-end" gap="xs" className="mb-3">
                <Text className="text-2xl font-semibold">{stat.value}</Text>
                <Text
                  className={`${
                    stat.diff > 0 ? "text-green-500" : "text-red-500"
                  } text-sm font-medium flex items-center space-x-1`}
                >
                  <span>{stat.diff}%</span>
                  <DiffIcon size={14} />{" "}
                  <Text size="xs" className="text-gray-500">
                    Compared to previous period
                  </Text>
                </Text>
              </Group>
            </Paper>
          );
        })}
      </div>
      <Group className="mx-auto mt-12 text-center">
        <Button
          radius="xl"
          size="md"
          className="flex-1 px-5 py-3 mx-auto bg-white md:flex-none rounded-3xl hover:bg-blue-500"
        >
          Contact Now
        </Button>
      </Group>
    </div>
  );
}
