import { useContext, useState } from "react";
import type { Task, UUID } from "../../types/user";
import { UserContext } from "../../contexts/UserContext";
import { saveQRCode, showToast, systemInfo, getFontColor } from "../../utils"
