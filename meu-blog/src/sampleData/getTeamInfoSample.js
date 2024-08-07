function getTeamInfoSample() {
  const teamInfoSample = `{
  "response": {
    "biggest": {
      "goals": {
        "against": {
          "away": 2,
          "home": 6
        },
        "for": {
          "away": 4,
          "home": 9
        }
      },
      "loses": {
        "away": null,
        "home": "1-6"
      },
      "streak": {
        "draws": 2,
        "loses": 1,
        "wins": 4
      },
      "wins": {
        "away": "1-4",
        "home": "9-0"
      }
    },
    "cards": {
      "red": {
        "0-15": {
          "percentage": null,
          "total": null
        },
        "106-120": {
          "percentage": null,
          "total": null
        },
        "16-30": {
          "percentage": "100.00%",
          "total": 1
        },
        "31-45": {
          "percentage": null,
          "total": null
        },
        "46-60": {
          "percentage": null,
          "total": null
        },
        "61-75": {
          "percentage": null,
          "total": null
        },
        "76-90": {
          "percentage": null,
          "total": null
        },
        "91-105": {
          "percentage": null,
          "total": null
        }
      },
      "yellow": {
        "0-15": {
          "percentage": "2.00%",
          "total": 1
        },
        "106-120": {
          "percentage": null,
          "total": null
        },
        "16-30": {
          "percentage": "4.00%",
          "total": 2
        },
        "31-45": {
          "percentage": "20.00%",
          "total": 10
        },
        "46-60": {
          "percentage": "28.00%",
          "total": 14
        },
        "61-75": {
          "percentage": "12.00%",
          "total": 6
        },
        "76-90": {
          "percentage": "32.00%",
          "total": 16
        },
        "91-105": {
          "percentage": "2.00%",
          "total": 1
        }
      }
    },
    "clean_sheet": {
      "away": 6,
      "home": 6,
      "total": 12
    },
    "failed_to_score": {
      "away": 4,
      "home": 3,
      "total": 7
    },
    "fixtures": {
      "draws": {
        "away": 6,
        "home": 3,
        "total": 9
      },
      "loses": {
        "away": 0,
        "home": 4,
        "total": 4
      },
      "played": {
        "away": 15,
        "home": 15,
        "total": 30
      },
      "wins": {
        "away": 9,
        "home": 8,
        "total": 17
      }
    },
    "form": "LWLWDLWWWWDWWDWWWDWLDWDDWDDWWW",
    "goals": {
      "against": {
        "average": {
          "away": "0.9",
          "home": "1.3",
          "total": "1.1"
        },
        "minute": {
          "0-15": {
            "percentage": "20.59%",
            "total": 7
          },
          "106-120": {
            "percentage": null,
            "total": null
          },
          "16-30": {
            "percentage": "11.76%",
            "total": 4
          },
          "31-45": {
            "percentage": "26.47%",
            "total": 9
          },
          "46-60": {
            "percentage": "14.71%",
            "total": 5
          },
          "61-75": {
            "percentage": "11.76%",
            "total": 4
          },
          "76-90": {
            "percentage": "8.82%",
            "total": 3
          },
          "91-105": {
            "percentage": "5.88%",
            "total": 2
          }
        },
        "total": {
          "away": 13,
          "home": 20,
          "total": 33
        }
      },
      "for": {
        "average": {
          "away": "1.8",
          "home": "2.1",
          "total": "1.9"
        },
        "minute": {
          "0-15": {
            "percentage": "8.77%",
            "total": 5
          },
          "106-120": {
            "percentage": null,
            "total": null
          },
          "16-30": {
            "percentage": "17.54%",
            "total": 10
          },
          "31-45": {
            "percentage": "12.28%",
            "total": 7
          },
          "46-60": {
            "percentage": "10.53%",
            "total": 6
          },
          "61-75": {
            "percentage": "24.56%",
            "total": 14
          },
          "76-90": {
            "percentage": "15.79%",
            "total": 9
          },
          "91-105": {
            "percentage": "10.53%",
            "total": 6
          }
        },
        "total": {
          "away": 27,
          "home": 31,
          "total": 58
        }
      }
    },
    "league": {
      "country": "England",
      "flag": "https://media.api-sports.io/flags/gb.svg",
      "id": 39,
      "logo": "https://media.api-sports.io/football/leagues/39.png",
      "name": "Premier League",
      "season": 2020
    },
    "lineups": [
      {
        "formation": "4-2-3-1",
        "played": 28
      },
      {
        "formation": "4-3-1-2",
        "played": 2
      }
    ],
    "penalty": {
      "missed": {
        "percentage": "0%",
        "total": 0
      },
      "scored": {
        "percentage": "100.00%",
        "total": 8
      },
      "total": 8
    },
    "team": {
      "id": 33,
      "logo": "https://media.api-sports.io/football/teams/33.png",
      "name": "Manchester United"
    }
  },
  "results": 11
}`;

  let teamInfoSampleJson = [];

  try {
    const jsonData = JSON.parse(teamInfoSample);
    teamInfoSampleJson = jsonData;
  } catch (error) {
    console.error("Error parsing JSON: ", error);
  }

  return teamInfoSampleJson;
}

export default getTeamInfoSample;
