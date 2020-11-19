const CustomHelper = {
    ACTIONS: {
        NEW_NOTE: "NEW_NOTE",
        REFETCH_NOTES: "REFRESH"
    },
    VARS: {
        STORAGE: {
            THEME_KEY: "THEME",
            NOTES_KEY: "NOTES"
        },
        NEW_NOTE: {
            TYPE_TEXT: "text",
            TYPE_LIST: "list"
        },
    },
    THEME: {
        AVAILABLE: ["default"],
        DEFAULT: "default"
    },
    COLORS: {
        GENERIC: {
            WHITE: "#FFFFFF",
            BLACK: "#000000"
        },
        TERMINAL: {
            TANGO: {
                BLACK: "#2E3436",
                RED: "#CC0000",
                GREEN: "#4E9A06",
                YELLOW: "#C4A000",
                BLUE: "#3465A4",
                PURPLE: "#75507B",
                CAYAN: "#06989A",
                WHITE: "#D3D7CF"
            },
            LINUX_CONSOLE: {
                BLACK: "#000000",
                RED: "#AA0000",
                GREEN: "#00AA00",
                YELLOW: "#AA5500",
                BLUE: "#0000AA",
                PURPLE: "#AA00AA",
                CAYAN: "#00AAAA",
                WHITE: "#AAAAAA"
            },
            XTERM: {
                BLACK: "#000000",
                RED: "#CD0000",
                GREEN: "#00CD00",
                YELLOW: "#CDCD00",
                BLUE: "#0000EE",
                PURPLE: "#CD00CD",
                CAYAN: "#00CDCD",
                WHITE: "#E5E5E5"
            }
        }
    }
};

export default CustomHelper;