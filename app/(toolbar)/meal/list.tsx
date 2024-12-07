"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import "./style.css";

type Props = {
  id: string;
};

export default function List(props: Props) {
  const { id } = props;

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [loading, setLoading] = useState(false);
  //   console.log(id);

  useEffect(() => {
    setLoading(true);
    if (date == undefined) {
      setDate(new Date());
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [date]);

  return (
    <div>
      <h1>Meal {id}</h1>
      <Link href="/meal/add">Add a meal</Link>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full"
      />

      {loading && <Skeleton className="h-48 w-full" />}

      {!loading && (
        <Card className="">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{id}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <time dateTime={date?.toISOString()}>
                {date?.toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      )}
    </div>
  );
}
