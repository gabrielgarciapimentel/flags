/* eslint-disable @typescript-eslint/no-unused-vars */

type City = {
  readonly id: number;
  readonly name: string;
}

interface CityModelCity extends FlagsResponseRequest {
  data: City[];
}

interface CityModelActions {
  setData: (props: CityModelCity) => void;
  reset: () => void;
  resetWithError: (error: string) => void;
} 