"use client";

import React, { useState } from "react";

import { Select } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div className="language">
      <Select.Root size="3" defaultValue="english">
        <Select.Trigger variant="soft" />
        <Select.Content variant="soft">
          <Select.Group>
            <Select.Label>Language</Select.Label>
            <Select.Item value="english">English</Select.Item>
            <Select.Item value="arabic">Arabic</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default Language;
